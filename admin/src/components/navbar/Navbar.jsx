import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Navbar = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <nav className="bg-[#FF0000] flex flex-col gap-5 w-70 h-full p-8 text-white font-bold text-[20px] shadow-xl">
      <div>
        <p className="text-center">Brand</p>
        <hr className="text-zinc-600" />
      </div>

      <Link
        to={"/inventario"}
        className="border border-transparent text-justify p-2 cursor-pointer rounded-full hover:text-black hover:bg-white"
      >
        <span className="ml-5">Inventario</span>
      </Link>

      <Link
        to={"/inventario"}
        className="border border-transparent text-justify p-2 cursor-pointer rounded-full hover:text-black hover:bg-white"
      >
        <span className="ml-5">Ventas</span>
      </Link>
      <Link
        to={"/inventario"}
        className="border border-transparent text-justify p-2 cursor-pointer rounded-full hover:text-black hover:bg-white"
      >
        <span className="ml-5">Usuarios</span>
      </Link>
    </nav>
  ) : (
    ""
  );
};
