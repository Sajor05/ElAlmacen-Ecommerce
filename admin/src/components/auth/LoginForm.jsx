import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

export function LoginForm() {
  /*--------------
  --  H O O K S --
  --------------*/

  //useForm
  const { register, handleSubmit, watch } = useForm();

  //useState
  const [show, setShow] = useState(false);

  //useContext
  const { signin, isAuthenticated } = useAuth();

  //useEffect
  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  /*-------------------------------------
  --  C O N S T  &&  F U N C T I O N S --
  -------------------------------------*/

  const passwordContent = watch("password");
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    await signin(values);
    if (isAuthenticated) {
      navigate("/home");
    }
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={onSubmit}
        className="bg-gray-700 text-white flex flex-col gap-5 py-5 px-8 w-100 rounded-lg"
      >
        <header className="text-center flex flex-col">
          <span className="text-[23px] font-semibold">
            ¡Bienvenido devuelta!
          </span>
          <span className="font-light text-[14px] mt-1">
            Porfavor ingrese usuario y contraseña de administrador para
            continuar
          </span>
        </header>
        <div className="flex flex-col">
          {/* C O R R E O  I N P U T */}

          <label className="font-semibold text-[15px]" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            placeholder="Micorreo@gmail.com..."
            className="border p-2 bg-white rounded mt-2 placeholder:text-[14px] placeholder:text-gray-500 text-black"
          />
        </div>

        {/* P A S S W O R D  I N P U T */}

        <div className="flex flex-col">
          <label className="font-semibold text-[15px]" htmlFor="password">
            Contraseña
          </label>
          <div className="relative flex flex-row items-center">
            <input
              id="password"
              type={show ? "text" : "password"}
              {...register("password", { required: true })}
              placeholder="••••••••"
              className="border p-2 pr-16 bg-white rounded w-full focus:outline-none focus:ring-2 placeholder:text-[14px] placeholder:text-gray-500 text-black"
            />
            {passwordContent && passwordContent.length > 0 ? (
              <span
                onClick={() => setShow(!show)}
                className="absolute cursor-pointer right-2 text-xs font-light text-gray-500 hover:text-[#FF0000]"
              >
                {show ? <FaRegEye size={17} /> : <FaRegEyeSlash size={17} />}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* S U B M I T  B U T T O N */}

        <div className="py-3 text-center">
          <button
            type="submit"
            className="bg-[#FF0000] p-2 rounded-[50px] cursor-pointer"
          >
            <span className="text-[16px] uppercase font-extrabold text-white">
              CONTINUAR
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
