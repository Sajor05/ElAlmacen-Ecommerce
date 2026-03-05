import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className="flex justify-between bg-[#FF0000] text-white px-20 py-5">
      <div>brand</div>
      <SearchBar />
      <NavButtons />
    </nav>
  );
};

const SearchBar = () => {
  return (
    <div className="flex lg:w-150 bg-white shadow-sm rounded-4xl items-center px-4 h-10">
      <input
        className="searchBar grow outline-none border-[1.5px] text-[16px] border-transparent text-black/90 text-sm placeholder-gray-400"
        type="text"
        placeholder="Buscar  productos, marcas y más..."
      />
      <button className="cursor-pointer border-l border-gray-200 pl-3 text-gray-500">
        <FaMagnifyingGlass />
      </button>
    </div>
  );
};

const NavButtons = () => {
  return (
    <div className="flex flex-row gap-5 items-center uppercase">
      <div className="nav-buttons flex flex-row gap-5 font-semibold">
        <Link to={""}>
          <span className="uppercase hover:opacity-[.8]">Categorias</span>
        </Link>
        <Link to={""}>
          <span className="uppercase hover:opacity-[.8]">Ofertas</span>
        </Link>
        <Link to={""}>
          <span className="uppercase hover:opacity-[.8]">Sucursales</span>
        </Link>
        <Link to={""}>
          <span className="uppercase hover:opacity-[.8]">Folletos</span>
        </Link>
      </div>
      <div>
        <Link to={""} className="hover:opacity-[.8]">
          Iniciar sesion
        </Link>
      </div>
    </div>
  );
};
