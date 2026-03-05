import { useState, useRef, Children } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import type { IQuickaccessCarouselProps } from "../../../../shared/interface";

export function QuickaccessCarousel({ children }: IQuickaccessCarouselProps) {
  const [curr, setCurr] = useState(0);
  const gap = 16;
  const visibleCount = 6;
  const articleWidth = 190;
  const containerRef = useRef(null);
  const slides = Children.toArray(children);
  if (!slides)
    return (
      <div className="flex justify-center items-center">
        <span className="text-[45] font-bold">Accessos no encontrados</span>
      </div>
    );
  const maxIndex = Math.max(0, slides.length - visibleCount);

  const prev = () => setCurr((curr) => (curr === 0 ? maxIndex : curr - 1));

  const next = () => setCurr((curr) => (curr >= maxIndex ? 0 : curr + 1));

  return (
    <div
      className="container-cards relative ml-3 overflow-x-hidden overflow-y-hidden"
      style={{ width: `${6 * 187 + 5 * gap}px` }}
      ref={containerRef}
    >
      <div
        className="container-cards flex ml-3 transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * (articleWidth + gap)}px)`,
          gap: `${gap}px`,
        }}
      >
        {slides}
      </div>
      {slides.length > visibleCount && (
        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
          <button
            onClick={prev}
            className="nextButton p-2 w-16 h-16 rounded-full shadow-md bg-white hover:bg-gray-50 text-[#FF1000] cursor-pointer pointer-events-auto transition-opacity absolute left-0 -ml-4"
            style={{ display: curr === 0 ? "none" : "block" }}
          >
            <ChevronLeft size={45} />
          </button>

          <button
            onClick={next}
            className="p-2 w-16 h-16 rounded-full shadow-md bg-white hover:bg-gray-50 text-[#FF1000] cursor-pointer pointer-events-auto transition-opacity absolute right-0 -mr-4"
            style={{ display: curr >= maxIndex ? "none" : "block" }}
          >
            <ChevronRight size={45} />
          </button>
        </div>
      )}
    </div>
  );
}
