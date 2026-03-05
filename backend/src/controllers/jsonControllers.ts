import path from "node:path";
import fs from "node:fs/promises";
import { cwd } from "node:process";
import type { Request, Response } from "express";
import Categories from "../schemas/category_schema.js";

export async function getCategories(req: Request, res: Response) {
  try {
    const allCategories = await Categories.find();
    res.status(200).json(allCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al agarrar las categorías" });
  }
}

export const getQuickaccess = async (req: Request, res: Response) => {
  try {
    const absolutePath = path.join(cwd(), "src", "mocks", "access.json");
    const data = await fs.readFile(absolutePath, "utf-8");
    const jsonData = JSON.parse(data);
    res.status(200).json(jsonData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
