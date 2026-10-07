import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      treatment,
      source,
      message,
      recaptchaToken,
    } = await req.json();

    if (!firstName || !email || !recaptchaToken) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify ReCAPTCHA
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecretKey) {
      const recaptchaVerifyResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
        }
      );
      
      const recaptchaVerifyData = await recaptchaVerifyResponse.json();
      
      if (!recaptchaVerifyData.success) {
        return NextResponse.json(
          { error: "Failed ReCAPTCHA verification" },
          { status: 400 }
        );
      }
    }

    const emailHtml = `
      <h2>New Website Enquiry</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName || "N/A"}</p>
      <p><strong>Email Address:</strong> ${email}</p>
      <p><strong>Telephone Number:</strong> ${phone || "N/A"}</p>
      <p><strong>Treatment of Interest:</strong> ${treatment || "N/A"}</p>
      <p><strong>How did you hear about us?:</strong> ${source || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message ? message.replace(/\n/g, "<br>") : "N/A"}</p>
    `;

    const data = await resend.emails.send({
      from: "Your Health First Clinic <info@yourhealthfirst.uk>",
      to: ["info@yourhealthfirst.uk"],
      replyTo: email,
      subject: `Website Enquiry from ${firstName} ${lastName || ""}`.trim(),
      html: emailHtml,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
