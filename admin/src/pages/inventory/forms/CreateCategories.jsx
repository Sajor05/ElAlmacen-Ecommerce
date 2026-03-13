import { useState } from "react";
import { updateCategories } from "../../../api/api";
import { SectionTitle } from "../../../models/SectionTitle";
import { useParentCategories } from "../../../hooks/CategoriesHook";

export function CreateCategory() {
  const [formData, setFormData] = useState({
    type: "",
    fatherCategory: "",
    name: "",
  });

  // 2. Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategories(formData);
    console.log("Datos a enviar:", formData);

    setFormData({
      type: "",
      fatherCategory: "",
      name: "",
    });
  };
  const categories = useParentCategories();
  return (
    <div className="border border-gray-400 rounded-lg p-5 shadow-md">
      <SectionTitle text={"Agregar Categoria"} />
      <form onSubmit={handleSubmit} id="form-data" className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium">
              ¿Categoría principal o Sub Categoria?
            </label>
            <select
              onChange={handleChange}
              name="type"
              required={true}
              value={formData.type}
              className="bg-white p-2 rounded border border-gray-300"
            >
              <option value="0">Ingrese valor...</option>
              <option value="1">Categoria Principal</option>
              <option value="2">SubCateoria</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium">
              Nombre de la nueva categoria
            </label>
            <input
              type="text"
              name="name"
              required={true}
              onChange={handleChange}
              value={formData.name}
              placeholder="Almacén..."
              className="bg-gray-50 p-2 rounded border border-gray-300"
            />
          </div>

          {/* Si es Sub Categoria */}

          {formData.type === "2" && (
            <div className="flex flex-col">
              <label className="text-lg font-medium">¿Categoría padre?</label>
              <select
                name="fatherCategory"
                onChange={handleChange}
                value={formData.fatherCategory}
                className="bg-white p-2 rounded border border-gray-300"
              >
                <option value="">Categorias...</option>
                {categories.map((c, i) => (
                  <option value={`${c.name}`} key={i}>{`${c.name}`}</option>
                ))}
              </select>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-[#3483fa] hover:bg-[#2968c8] text-white font-bold py-3 px-4 rounded-lg transition duration-300 text-lg cursor-pointer"
        >
          Enviar categoría
        </button>
      </form>
    </div>
  );
}
