import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Navbar = () => {
  const opciones = [
    { name: "Inventario", path: "/inventario" },
    { name: "Estadisticas", path: "/inventario" },
    { name: "Usuarios", path: "/inventario" },
    { name: "Reportes", path: "/inventario" },
    { name: "Cerrar sesión", path: "/logout" },
  ];
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <nav className="bg-[#1e293be6] flex flex-col gap-5 w-85 min-h-full p-8 text-white font-bold text-[20px] shadow-xl">
      <div className="fixed flex flex-col gap-6">
        <div>
          <p className="text-center">Brand</p>
          <hr className="text-zinc-600" />
        </div>
        <div className="text-center flex flex-col gap-5 px-10">
          {opciones.map((o, i) => (
            <Link
              key={i}
              to={o.path}
              className="border border-transparent text-justify p-2 cursor-pointer rounded-full hover:text-black hover:bg-white"
            >
              <span className="ml-5">{o.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  ) : (
    ""
  );
};
