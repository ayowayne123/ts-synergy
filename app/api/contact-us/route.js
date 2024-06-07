import { NextResponse } from "next/server";
import { RateLimiterMemory } from "rate-limiter-flexible";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const emailTemplate = (name, email, message) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #007BFF;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        .content h2 {
            margin-top: 0;
        }
        .content p {
            line-height: 1.6;
        }
        .footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #555555;
        }
        .reply-button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007BFF;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
        }
        .reply-button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>New Contact Form Submission</h1>
    </div>
    <div class="content">
        <h2>Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <a href="mailto:${email}" class="reply-button">Reply</a>
    </div>
    <div class="footer">
        <p>This email was sent from your website's contact form.</p>
    </div>
</div>

</body>
</html>
`;

const transporter = nodemailer.createTransport({
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
    secure: false,
    logger: true,
    debug: true,
});

const rateLimiter = new RateLimiterMemory({
    points: 5, // Number of points
    duration: 3600, // Per second(s)
});

const POST = async (req, res) => {
    try {
        await rateLimiter.consume(req.ip);

        const { name, email, message } = await req.json();
        console.log("Name:", name, "Email:", email, "Message:", message);

        const mailData = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `Message From ${name}`,
            text: `${message} | Sent from: ${email}`,
            html: emailTemplate(name, email, message),
        };

        await transporter.sendMail(mailData);
        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error) {
        if (error instanceof Error && error.message.includes('RateLimiter')) {
            return NextResponse.json({ message: "Too many requests, please try again later." }, { status: 429 });
        }
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Error sending email" }, { status: 500 });
    }
};

export { POST };
