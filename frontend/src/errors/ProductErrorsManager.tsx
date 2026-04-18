import { Navbar } from "../components/extends/navbar/Navbar";
import { Footer } from "../components/extends/footer/Footer";

export const ProductIDNotFoundError = () => {
  return (
    <>
      <Navbar />
      <main className="mx-50 flex justify-center items-center">
        <div className="text-center flex flex-col gap-3">
          <span className="text-4xl text-red-600">ERROR</span>
          <span className="text-md font-bold">
            Producto no encontrado, vuelva más tarde.
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
};
