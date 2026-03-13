import type { Request, Response } from "express";
import Categories from "../schemas/category_schema.js";

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, fatherCategory } = req.body;

    const newCategory = new Categories({ name });

    if (fatherCategory && fatherCategory.trim() !== "") {
      const parent = await Categories.findOne({ name: fatherCategory });

      if (!parent) {
        return res
          .status(404)
          .json({ message: "La categoría padre no existe" });
      }

      parent.subCategorias.push(newCategory._id);
      await parent.save();
      newCategory.parent = parent._id;
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
