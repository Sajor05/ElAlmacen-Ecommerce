import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className="fixed min-w-full z-10 flex justify-between items-center bg-[#FF0000] text-white px-20 py-5">
      <Link to={"/"}>
        <img
          src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5d9f2b984131710001d3a86e/0x0.png"
          alt="zyros logo"
          className="w-20 h-19 rounded-full"
        />
      </Link>
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
  const navOptions = [
    {
      title: "Categorias",
      path: "#",
    },
    {
      title: "Ofertas",
      path: "/zls/stores",
    },
    {
      title: "Sucursales",
      path: "#",
    },
    {
      title: "Folletos",
      path: "#",
    },
    {
      title: "Iniciar sesión",
      path: "/zas/login-service-form",
    },
  ];
  return (
    <div className="flex flex-row gap-5 items-center uppercase">
      <div className="nav-buttons flex flex-row gap-5 font-semibold">
        {navOptions.map((o, i) => (
          <Link to={o.path} key={i}>
            <span className=" font-bold hover:opacity-[0.8]">{o.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
