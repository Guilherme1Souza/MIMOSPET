import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: { bodyParser: false }, // Desativa o bodyParser padrão do Next.js
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Erro ao processar arquivo" });
      }

      const { nome, sobrenome, email, assunto, mensagem } = fields;
      const arquivo = files.arquivo;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_DESTINO,
        subject: assunto,
        text: `Nome: ${nome} ${sobrenome}\nEmail: ${email}\nMensagem: ${mensagem}`,
        attachments: arquivo
          ? [
              {
                filename: arquivo.originalFilename,
                content: fs.readFileSync(arquivo.filepath),
              },
            ]
          : [],
      };

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "E-mail enviado com sucesso!" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Erro ao enviar e-mail." });
      }
    });
  } else {
    res.status(405).json({ success: false, message: "Método não permitido." });
  }
}