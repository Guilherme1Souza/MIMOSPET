import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome, sobrenome, email, assunto, mensagem } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email, // O e-mail fornecido pelo usuário no formulário (remetente)
      to: process.env.EMAIL_DESTINO, // E-mail fixo do destinatário
      subject: assunto,
      text: `Nome: ${nome} ${sobrenome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "E-mail enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Erro ao enviar e-mail." });
    }
  } else {
    res.status(405).json({ success: false, message: "Método não permitido." });
  }
}
