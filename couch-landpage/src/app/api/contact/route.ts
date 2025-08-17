import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Booking Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Nouă programare de la ${data.name}`,
      text: `
        Hello,

        You have received a new coaching session request. Here are the details:

        Name: ${data.name} 
        Email: ${data.email} 
        Phone: ${data.phone}
        Requested Date & Time: ${data.date} ${data.time}

        The customer has confirmed that they want to schedule a meeting for coaching.
        Please get in touch with them to arrange the details.

        Best regards,  
        Ionuț Andrici  
        Life & Relationship Coach
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email trimis cu succes" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Eroare la trimiterea emailului" },
      { status: 500 }
    );
  }
}
