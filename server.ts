import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", async (req, res) => {
    const { name, company, email, phone, service, message } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: "Nombre y correo son obligatorios" });
    }

    try {
      // Configure transporter
      // For a real app, use environment variables for credentials
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Or your preferred service
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // If credentials are not provided, we simulate success for the demo
      // but log what would have been sent.
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.log("Simulating email send (Credentials missing in .env):");
        console.log({
          to: "ventas@ib-mexico.com",
          subject: `Nueva solicitud de contacto: ${service}`,
          body: `
            Nombre: ${name}
            Empresa: ${company}
            Email: ${email}
            Teléfono: ${phone}
            Servicio: ${service}
            Mensaje: ${message}
          `
        });
        
        // Return success even if simulated, to show the UI works
        return res.json({ success: true, message: "Solicitud recibida correctamente (Simulado)" });
      }

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "ventas@ib-mexico.com",
        subject: `Nueva solicitud de contacto: ${service}`,
        text: `
          Has recibido una nueva solicitud de contacto desde el sitio web:

          Nombre: ${name}
          Empresa: ${company}
          Email: ${email}
          Teléfono: ${phone}
          Servicio: ${service}
          Mensaje: ${message}
        `,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Solicitud enviata correctamente" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error al enviar la solicitud. Por favor intenta más tarde." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
