import Admin from "../schemas/admin_schema.js";
import type { Request, Response } from "express";
import { createAccessToken } from "../middleware/jwt.js";

export async function loginAdmin(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    console.log(req.body);
    const isProduction = process.env.NODE_ENV === "production";
    const userFound = await Admin.findOne({ email });
    if (!userFound)
      return res.status(400).json({ message: "Revisa los datos ingresados" });
    const matches = password === userFound.password;
    if (!matches) {
      return res
        .status(400)
        .json({ message: "Revisa la contraseña ingresada" });
    }
    const token = await createAccessToken({ id: userFound._id.toString() });
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction ? true : false,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({
      id: userFound._id,
      email: userFound.email,
      username: userFound.username,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}
