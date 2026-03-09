import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";
import User from "../schemas/user_schema.js";
import Admin from "../schemas/admin_schema.js";
import type { Request, Response } from "express";
import type { IPayload } from "../types/interface.js";

export async function verifyToken(req: Request, res: Response) {
  const { token } = req.cookies;
  if (!token) {
    return res
      .status(401)
      .json({ message: "No hay token, autorización denegada" });
  }

  try {
    const tokenVerify = jwt.verify(token, SECRET_KEY) as IPayload;
    const userFound = await User.findById(tokenVerify.id);
    if (!userFound) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      cart: userFound.cart,
      purchaseHistory: userFound.purchaseHistory,
    });
  } catch (error) {
    return res.status(401).json({ message: "Token invalido" });
  }
}

export async function verifyAdminToken(req: Request, res: Response) {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return res
      .status(401)
      .json({ message: "No hay token, autorización denegada" });
  }

  try {
    const tokenVerify = jwt.verify(token, SECRET_KEY) as IPayload;
    const userFound = await Admin.findById(tokenVerify.id);
    if (!userFound) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    return res.status(401).json({ message: "Token invalido" });
  }
}
