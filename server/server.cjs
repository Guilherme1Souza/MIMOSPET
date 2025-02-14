require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(cors());

const upload = multer({ dest: "uploads/" }); // Define o destino dos uploads temporários

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", upload.single("arquivo"), async (req, res) => {
  const { nome, sobrenome, email, assunto, mensagem } = req.body;
  const arquivo = req.file;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_DESTINO,
    subject: assunto,
    text: `Nome: ${nome} ${sobrenome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    attachments: arquivo
      ? [
          {
            filename: arquivo.originalname,
            content: fs.readFileSync(arquivo.path),
          },
        ]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erro ao enviar e-mail." });
  } finally {
    if (arquivo) fs.unlinkSync(arquivo.path); // Remove o arquivo temporário após o envio
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
