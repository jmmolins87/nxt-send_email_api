



import nodemailer from "nodemailer";
import { BodySendMailRequest } from "@/models/bodySendEmailRequest.model";


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmailService = async (body: BodySendMailRequest) => {
  try {
    await transporter.sendMail({
      from: body.from,
      to: body.to,
      subject: body.subject,
      text: body.content,
    });
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    return { success: false, message: error };
  }
};