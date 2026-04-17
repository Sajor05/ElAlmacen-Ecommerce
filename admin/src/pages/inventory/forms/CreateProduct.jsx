import "./style.css";
import { useState } from "react";
import { updateProducts } from "../../../api/api";
import { SectionTitle } from "../../../models/SectionTitle";
import {
  useChildrenCategories,
  useParentCategories,
} from "../../../hooks/CategoriesHook";

export function CreateProduct() {
  const [product, setProduct] = useState({
    category: "",
    subCategory: "",
    isOffer: false,
    offerPercent: 0,
    title: "",
    price: 0,
    stock: 0,
    hasQuotas: false,
    quotasCount: 0,
    imagesArray: [],
    details: [],
    description: "",
    seller: {
      name: "zyros",
      rating: 5,
      antique: 5,
      sells: 10000,
    },
  });

  // 2. Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const textToArray = (text) => {
    return text
      ? text
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line !== "")
      : [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    product.imagesArray = textToArray(product.imagesArray);
    product.details = textToArray(product.details);
    updateProducts(product);

    setProduct({
      isOffer: false,
      offerPercent: 0,
      title: "",
      price: 0,
      stock: 0,
      hasQuotas: false,
      quotasCount: 0,
      imagesArray: [],
      details: "",
      description: "",
      seller: {
        name: "zyros",
        rating: 5,
        antique: 5,
      },
    });
    window.location.reload();
    //console.log("Datos a enviar:", product);
  };
  return (
    <main className="p-5">
      <header className="text-white text-center flex flex-col gap-3 px-30">
        <h2 className="text-3xl font-bold">Agregar producto al inventario</h2>
        <hr className="text-gray-700" />
      </header>
      <form
        onSubmit={handleSubmit}
        id="form-data"
        className="mt-10 flex flex-col gap-4"
      >
        <ProductDetailCamp handleChange={handleChange} />
        <OfferStateCamp handleChange={handleChange} data={product} />
        <ProductCategoryCamp handleChange={handleChange} />
        <DescriptionAndImagesCamp handleChange={handleChange} />
        <button
          type="submit"
          className="w-full bg-[#3483fa] hover:bg-[#2968c8] text-white font-bold py-3 px-4 rounded-lg transition duration-300 text-lg cursor-pointer"
        >
          Enviar producto
        </button>
      </form>
    </main>
  );
}

const ProductDetailCamp = ({ handleChange }) => {
  return (
    <section className="bg-white rounded-xl p-6">
      <div className="text-center p-4">
        <h2 className="text-2xl font-semibold">Titulo, Precio y Stock</h2>
        <hr className="text-gray-400 mt-3" />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          {/* T I T U L O  D E L  P R O D U C T O */}
          <label className="text-lg font-medium">Título del producto</label>
          <input
            type="text"
            name="title"
            value={FormData.title}
            onChange={handleChange}
            placeholder="Ej: Freidora de Aire..."
            className="bg-gray-50 p-2 rounded border border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          {/* P R E C I O  D E L  P R O D U C T O */}
          <label className="text-lg font-medium">Precio</label>
          <input
            type="number"
            min={"0"}
            value={FormData.price}
            onChange={handleChange}
            name="price"
            placeholder="$..."
            className="bg-gray-50 p-2 rounded border border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium">Stock</label>
          <input
            type="number"
            min={"0"}
            name="stock"
            onChange={handleChange}
            value={FormData.stock}
            placeholder="Cantidad..."
            className="bg-gray-50 p-2 rounded border border-gray-300"
          />
        </div>
      </div>
    </section>
  );
};

const OfferStateCamp = ({ handleChange, data }) => {
  return (
    <section className="flex flex-col gap-4 bg-white rounded-xl p-6">
      <div>
        <h2 className="text-2xl font-semibold">Descuento y stock</h2>
        <hr className="text-gray-400 mt-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-lg font-medium">¿Está en oferta?</label>
          <select
            name="isOffer"
            onChange={handleChange}
            value={FormData.isOffer}
            className="bg-gray-50 p-2 rounded border border-gray-300"
          >
            <option value="">Seleccionar...</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
        {data.isOffer === "true" && (
          <div className="flex flex-col">
            <label className="text-lg font-medium">Porcentaje de oferta</label>
            <input
              type="number"
              name="offerPercent"
              min={"0"}
              onChange={handleChange}
              value={FormData.offerPercent}
              placeholder="Ej: 20% (solo numero)"
              className="bg-gray-50 p-2 rounded border border-gray-300"
            />
          </div>
        )}

        <div className="flex flex-col">
          <label className="text-lg font-medium">¿Tiene cuotas?</label>
          <select
            name="hasQuotas"
            onChange={handleChange}
            value={FormData.hasQuotas}
            className="bg-gray-50 p-2 rounded border border-gray-300"
          >
            <option value="">Seleccionar...</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>

        {data.hasQuotas === "true" && (
          <div className="flex flex-col">
            <label className="text-lg font-medium">Cantidad de cuotas</label>
            <select
              name="quotasCount"
              onChange={handleChange}
              value={FormData.quotasCount}
              className="bg-gray-50 p-2 rounded border border-gray-300"
            >
              <option value="none">Seleccionar...</option>
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </div>
        )}
      </div>
    </section>
  );
};

const ProductCategoryCamp = ({ handleChange }) => {
  const childrenCategories = useChildrenCategories();
  const fatherCategories = useParentCategories();
  return (
    <section className="flex flex-col gap-4 bg-white rounded-xl p-6">
      <div>
        <h2 className="text-2xl font-semibold">Categoria</h2>
        <hr className="text-gray-400 mt-3" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-blue-50 p-4 rounded-lg">
        {/* C A T E G O R I A  P R I N C I P A L */}

        <div className="flex flex-col">
          <label className="text-lg font-medium">Categoría Principal</label>
          <select
            name="category"
            onChange={handleChange}
            value={FormData.category}
            className="bg-white p-2 rounded border border-gray-300"
          >
            <option value="0">Categoria...</option>
            {fatherCategories.map((cat, i) => (
              <option key={i}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* C A T E G O R I A  S E C U N D A R I A */}
        {FormData.type != "0" && (
          <div className="flex flex-col">
            <label className="text-lg font-medium">Sub-Categoría</label>
            <select
              name="subCategory"
              onChange={handleChange}
              value={FormData.subCategory}
              className="bg-white p-2 rounded border border-gray-300"
            >
              <option value="0">Sub categoria...</option>
              {childrenCategories.map((c, i) => (
                <option key={i}>{c.name}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    </section>
  );
};

const DescriptionAndImagesCamp = ({ handleChange }) => {
  return (
    <section className="flex flex-col gap-4 bg-white rounded-xl p-6">
      <div>
        <h2 className="text-2xl font-semibold">Categoria</h2>
        <hr className="text-gray-400 mt-3" />
      </div>
      <div className="flex flex-col gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-lg font-medium">
            Imágenes (Una URL por línea)
          </label>
          <textarea
            name="imagesArray"
            onChange={handleChange}
            value={FormData.imagesArray}
            rows="4"
            className="bg-gray-50 p-2 rounded border border-gray-300 font-mono text-sm"
            placeholder="https://imagen1.webp&#10;https://imagen2.webp"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium">
            Características (Uno por línea)
          </label>
          <textarea
            name="details"
            onChange={handleChange}
            value={FormData.details}
            rows="4"
            className="bg-gray-50 p-2 rounded border border-gray-300"
            placeholder="Tamaño, potencia, peso, etc..."
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium">Descripción</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={FormData.description}
            rows="4"
            className="bg-gray-50 p-2 rounded border border-gray-300 font-mono text-sm"
            placeholder="Descripción..."
          ></textarea>
        </div>
      </div>
    </section>
  );
};
