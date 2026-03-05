import type { Request, Response } from "express";
import Categories from "../schemas/category_schema.js";

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, fatherCategory } = req.body;

    // 1. Creamos la instancia de la nueva categoría (aún no la guardamos)
    const newCategory = new Categories({ name });

    // 2. Si hay una categoría padre, validamos y vinculamos
    if (fatherCategory && fatherCategory.trim() !== "") {
      const parent = await Categories.findOne({ name: fatherCategory });

      if (!parent) {
        return res
          .status(404)
          .json({ message: "La categoría padre no existe" });
      }

      // Actualizamos el padre: agregamos el ID de la nueva categoría a sus subcategorías
      // Nota: Asegúrate de que en tu schema 'subCategorias' sea un array de IDs
      parent.subCategorias.push(newCategory._id);
      await parent.save();

      // Opcional: Si tu schema tiene un campo 'parent', guárdalo también en el hijo
      // newCategory.father = parent._id;
    }

    // 3. Guardamos la nueva categoría
    await newCategory.save();

    return res.status(201).json({
      message: "Categoría creada exitosamente",
      data: newCategory,
    });
  } catch (error) {
    console.error("Error al crear categoría:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}
