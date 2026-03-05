import { SectionTitle } from "../../../models/SectionTitle";
import { useCategories } from "../../../hooks/CategoriesHook";

export const CreateProduct = () => {
  const categories = useCategories();
  return (
    <div className="border border-gray-400 rounded-lg p-5 shadow-md">
      <SectionTitle text={"Agregar producto al inventario"} />
      <form action="" id="form-data" className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            {/* T I T U L O  D E L  P R O D U C T O */}

            <label className="text-lg font-medium">Título del producto</label>
            <input
              type="text"
              name="title"
              placeholder="Ej: Freidora de Aire..."
              className="bg-gray-50 p-2 rounded border border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            {/* P R E C I O  D E L  P R O D U C T O */}

            <label className="text-lg font-medium">Precio</label>
            <input
              type="number"
              name="price"
              placeholder="$..."
              className="bg-gray-50 p-2 rounded border border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Stock</label>
            <input
              type="number"
              name="stockCount"
              placeholder="Cantidad..."
              className="bg-gray-50 p-2 rounded border border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Cuotas (cuotes)</label>
            <input
              type="number"
              name="cuotes"
              placeholder="Ej: 12"
              className="bg-gray-50 p-2 rounded border border-gray-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium">¿Está en oferta?</label>
            <select
              name="isOffer"
              className="bg-gray-50 p-2 rounded border border-gray-300"
            >
              <option value="false">false</option>
              <option value="true">true</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Porcentaje de oferta</label>
            <input
              type="number"
              name="offer"
              placeholder="Ej: 20"
              className="bg-gray-50 p-2 rounded border border-gray-300"
            />
          </div>
        </div>

        {/* C A T E G O R I A */}

        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2 mt-8">
          Categoría
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-blue-50 p-4 rounded-lg">
          {/* C A T E G O R I A  P R I N C I P A L */}

          <div className="flex flex-col">
            <label className="text-lg font-medium">Categoría Principal</label>
            <select
              name=""
              id=""
              className="bg-white p-2 rounded border border-gray-300"
            >
              <option value="0">Categoria...</option>
              {categories.map((cat, i) => (
                <option key={i}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* C A T E G O R I A  S E C U N D A R I A */}
          {}
          <div className="flex flex-col">
            <label className="text-lg font-medium">Sub-Categoría</label>
            <input
              type="text"
              name="cat_sub"
              placeholder="Ej: Jarras Elétricas"
              className="bg-white p-2 rounded border border-gray-300"
            />
          </div>
        </div>

        {/* P R O V E E D O R */}

        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2 mt-8">
          Proveedor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-yellow-50 p-4 rounded-lg">
          {/* N O M B R E  D E L  P R O V E E D O R */}

          <div className="flex flex-col">
            <label className="text-lg font-medium">Nombre del proveedor</label>
            <input
              type="text"
              name="seller_name"
              placeholder="Ej: ajaxgold"
              className="bg-white p-2 rounded border border-gray-300"
            />
          </div>

          {/* C A N T I D A D  C O M P A D O */}

          <div className="flex flex-col">
            <label className="text-lg font-medium">Cantidad</label>
            <input
              type="number"
              name="seller_count"
              placeholder="Ej: 100000"
              className="bg-white p-2 rounded border border-gray-300"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2 mt-8">
          Detalles e Imágenes
        </h2>
        <div className="flex flex-col gap-6 mb-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium">
              Imágenes (Una URL por línea)
            </label>
            <textarea
              name="images_list"
              rows="4"
              className="bg-gray-50 p-2 rounded border border-gray-300 font-mono text-sm"
              placeholder="https://imagen1.webp&#10;https://imagen2.webp"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Logo (Del vendedor)</label>
            <textarea
              name="logo"
              rows="4"
              className="bg-gray-50 p-2 rounded border border-gray-300 font-mono text-sm"
              placeholder="https://logo.webp"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">
              Características (Uno por línea)
            </label>
            <textarea
              name="details_list"
              rows="4"
              className="bg-gray-50 p-2 rounded border border-gray-300"
              placeholder="Tamaño, potencia, peso, etc..."
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Descripción</label>
            <textarea
              name="description"
              rows="4"
              className="bg-gray-50 p-2 rounded border border-gray-300 font-mono text-sm"
              placeholder="Descripción..."
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#3483fa] hover:bg-[#2968c8] text-white font-bold py-3 px-4 rounded-lg transition duration-300 text-lg cursor-pointer"
        >
          Enviar producto
        </button>
      </form>
    </div>
  );
};
