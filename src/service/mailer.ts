import nodemailer from "nodemailer";
import { transporter } from "../config/nodemailer";

interface ContactData {
  name: string;
  email: string;
  number: string;
  message: string;
}

export const sendMail = async ({ name, email, number, message }: ContactData) => {
  const mailOptions = {
    from: `"Formulario Web" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: "Nuevo mensaje desde el formulario",
    html: `
      <h3>Nuevo mensaje desde la web</h3>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>WhatsApp:</strong> ${number}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};
