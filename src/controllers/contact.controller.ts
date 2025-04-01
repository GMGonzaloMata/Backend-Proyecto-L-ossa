import { Request, Response, NextFunction } from "express";
import { sendMail } from "../service/mailer";

export const sendContactEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, number, message } = req.body;

  if (!name || !email || !number || !message) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  try {
    await sendMail({ name, email, number, message });
    res.status(200).json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ success: false, message: "Error al enviar el correo" });
  }
};
