import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailRequest {
  name: string;
  email: string;
  phone: string;
  course: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, course, message } = (await request.json()) as EmailRequest;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_SEND_TO,
      subject: 'Новая заявка с формы',
      text: `Name: ${name}\nEmail: ${email}\nCourse: ${course}\nPhone: ${phone}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error sending email.' }, { status: 500 });
  }
}
