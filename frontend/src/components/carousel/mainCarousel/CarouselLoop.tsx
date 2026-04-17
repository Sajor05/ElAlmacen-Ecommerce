import { ChevronLeft } from "react-feather";
import { ChevronRight } from "react-feather";
import { useState, useEffect, useRef, Children } from "react";
import type {
  ButtonsProps,
  CarouselLoopProps,
} from "../../../../../shared/interface";

export function CarouselLoop({ children }: CarouselLoopProps) {
  // 1. Convertimos los hijos en un array real para poder manipularlos
  const arrayChildren = Children.toArray(children);

  // 2. Creamos el array con CLONES: [CopiaUltima, 1, 2, 3, ..., CopiaPrimera]
  const slidesWithClones = [
    arrayChildren[arrayChildren.length - 1], // Clon de la última al principio
    ...arrayChildren,
    arrayChildren[0], // Clon de la primera al final
  ];

  // Empezamos en el índice 1 (porque el 0 es el clon)
  const [curr, setCurr] = useState(1);

  // Estado para controlar si la animación está activa o no
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const isTransitioning = useRef(false); // Bloqueo para evitar clicks rápidos

  // ---------------------
  // -- F U N C I O N E S
  // ---------------------

  const next = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setTransitionEnabled(true); // Activamos animación
    setCurr((prev) => prev + 1);
  };

  const prev = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setTransitionEnabled(true); // Activamos animación
    setCurr((prev) => prev - 1);
  };

  // ---------------------------------------------
  // -- MAGIA DEL INFINITO (onTransitionEnd) --
  // ---------------------------------------------
  // Esta función se ejecuta sola cuando termina la animación CSS (0.5s después)
  const handleTransitionEnd = () => {
    isTransitioning.current = false;

    // CASO A: Estamos en el clon de la primera (al final) -> Saltamos a la primera real
    if (curr === slidesWithClones.length - 1) {
      setTransitionEnabled(false); // Apagamos animación para el salto
      setCurr(1); // Saltamos al índice 1 (la primera real)
    }

    // CASO B: Estamos en el clon de la última (al principio) -> Saltamos a la última real
    if (curr === 0) {
      setTransitionEnabled(false); // Apagamos animación para el salto
      setCurr(slidesWithClones.length - 2); // Saltamos a la penúltima posición (la última real)
    }
  };

  // -----------------------------
  // -- A U T O S I G U I E N T E --
  // -----------------------------
  useEffect(() => {
    const id = setTimeout(() => {
      next();
    }, 8000);
    return () => clearTimeout(id);
  }, [curr]); // Dependemos de 'curr' para reiniciar el timer cada vez que cambia

  return (
    <div className="overflow-x-hidden relative">
      <div
        className="flex"
        // Vinculamos el evento de fin de transición
        onTransitionEnd={handleTransitionEnd}
        style={{
          // Movemos el carrusel
          transform: `translateX(-${curr * 100}%)`,
          // Si transitionEnabled es true, animamos. Si es false, el cambio es instantáneo (invisible)
          transition: transitionEnabled ? "transform 500ms ease-out" : "none",
        }}
      >
        {/* Renderizamos los slides con clones */}
        {slidesWithClones.map((slide, index) => (
          <div key={index} className="w-full shrink-0">
            {slide}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        {/* pointer-events-auto para que los botones funcionen aunque el contenedor sea none */}
        <div className="pointer-events-auto">
          <Left_button onClick={prev}></Left_button>
        </div>
        <div className="pointer-events-auto">
          <Right_button onClick={next}></Right_button>
        </div>
      </div>
    </div>
  );
}

const Left_button = ({ onClick }: ButtonsProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className="p-1 rounded-full shadow bg-white text-gray-800 cursor-pointer hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
      >
        <ChevronLeft size={40} color="skyblue"></ChevronLeft>
      </button>
    </>
  );
};

const Right_button = ({ onClick }: ButtonsProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className="p-1 rounded-full shadow bg-white text-gray-800 cursor-pointer hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
      >
        <ChevronRight size={40} color="skyblue"></ChevronRight>
      </button>
    </>
  );
};
