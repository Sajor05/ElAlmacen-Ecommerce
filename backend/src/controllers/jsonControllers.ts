import path from "node:path";
import fs from "node:fs/promises";
import { cwd } from "node:process";
import type { Request, Response } from "express";
import Admin from "../schemas/admin_schema.js";
import Categories from "../schemas/category_schema.js";

/*----------------------------------------------
-- C A T E G O R I E S  C O N T R O L L E R S --
----------------------------------------------*/
export async function getCategories(req: Request, res: Response) {
  try {
    const allCategories = await Categories.find();
    res.status(200).json(allCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al agarrar las categorías" });
  }
}

export async function getParentCategories(req: Request, res: Response) {
  try {
    const parentCategories = await Categories.find({ parent: null }).populate(
      "subCategorias",
    );
    res.status(200).json(parentCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al agarrar las categorías" });
  }
}

export async function getChildrenCategories(req: Request, res: Response) {
  try {
    const childrenCategories = await Categories.find({
      parent: { $ne: null },
    });
    res.status(200).json(childrenCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al agarrar las categorías" });
  }
}

/*---------------
-- O T H E R S --
-----------------*/

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

export async function getAdminList(req: Request, res: Response) {
  try {
    const adminList = await Admin.find({ parent: null });
    res.status(200).json(adminList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al agarrar las categorías" });
  }
}
