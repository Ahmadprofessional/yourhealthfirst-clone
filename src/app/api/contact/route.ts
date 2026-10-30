import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    // Created per request so the build does not need the key
    const resend = new Resend(process.env.RESEND_API_KEY);
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

    if (!firstName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify ReCAPTCHA if token is provided
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecretKey && recaptchaToken) {
      try {
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
      } catch (recaptchaErr) {
        console.error("ReCAPTCHA verification error:", recaptchaErr);
      }
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const timeStr = now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // ── 1. Patient Confirmation Email HTML ──
    const patientConfirmationHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consultation Request Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF7F2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #2C2520;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FAF7F2; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 620px; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(122, 98, 72, 0.08); border: 1px solid #EAE3D6;">
          
          <!-- Clinic Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #7A6248 0%, #9B8065 50%, #B49B7D 100%); padding: 32px 30px; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #F3E7C4; font-weight: 600;">Harley Street &bull; London</p>
              <h1 style="margin: 0; font-size: 26px; letter-spacing: 1px; color: #FFFFFF; font-weight: 700; text-transform: uppercase;">YOUR HEALTH FIRST</h1>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: rgba(255, 255, 255, 0.85); letter-spacing: 1px;">Aesthetic &amp; Wellness Clinic</p>
            </td>
          </tr>

          <!-- Navigation Links -->
          <tr>
            <td style="background-color: #F6F1EA; padding: 14px 20px; text-align: center; border-bottom: 1px solid #EAE3D6;">
              <a href="https://www.yourhealthfirst.uk/en" style="color: #7A6248; text-decoration: underline; font-size: 14px; font-weight: 600; margin: 0 12px;">Home</a>
              <span style="color: #D1C5B4;">&bull;</span>
              <a href="https://www.yourhealthfirst.uk/en/treatments" style="color: #7A6248; text-decoration: underline; font-size: 14px; font-weight: 600; margin: 0 12px;">Services</a>
              <span style="color: #D1C5B4;">&bull;</span>
              <a href="https://www.yourhealthfirst.uk/en/about-us" style="color: #7A6248; text-decoration: underline; font-size: 14px; font-weight: 600; margin: 0 12px;">About us</a>
              <span style="color: #D1C5B4;">&bull;</span>
              <a href="https://www.yourhealthfirst.uk/en/gallery" style="color: #7A6248; text-decoration: underline; font-size: 14px; font-weight: 600; margin: 0 12px;">Gallery</a>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 35px 35px 25px 35px; line-height: 1.65; font-size: 15px; color: #374151;">
              <p style="margin: 0 0 18px 0; font-size: 17px; font-weight: 600; color: #1E293B;">Dear ${firstName},</p>
              
              <p style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #7A6248;">Welcome to Yourhealthfirst Clinic.</p>
              
              <p style="margin: 0 0 16px 0;">Thank you for requesting a consultation with <strong>YourHealthFirst Clinic</strong>. We appreciate you selecting us as a trusted source to advise and help you with your needs.</p>
              
              <p style="margin: 0 0 16px 0;">One of our team members will be in contact shortly to collect a bit more information and schedule an appointment. In the meantime, please feel free to have a look at our <a href="https://www.yourhealthfirst.uk/en/gallery" style="color: #7A6248; font-weight: 600; text-decoration: underline;">image gallery</a> to see before and after treatment results or browse through our patients <a href="https://www.google.com/search?q=YourHealthFirst+Clinic#mpd=~15060418522766184397/customers/reviews" target="_blank" style="color: #7A6248; font-weight: 600; text-decoration: underline;">Reviews</a>.</p>
              
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #4B5563; font-style: italic;">
                If your consultation request is regarding a promotion, please remember to mention this during our call.
              </p>

              <!-- Important Note Box -->
              <div style="background-color: #F8F5F0; border: 1px solid #EAE3D6; border-radius: 8px; padding: 18px 20px; margin: 24px 0;">
                <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #7A6248;">Please Note</p>
                <p style="margin: 0 0 10px 0; font-size: 14px; color: #4B5563; line-height: 1.6;">
                  We are not able to take payment via email. We understand that it might not always be possible for you to answer the phone so, if there's a particular day or time that would be best for us to give you a call, simply let us know by replying to this email or contacting us directly:
                </p>
                <p style="margin: 0; font-size: 14px;">
                  <span style="color: #6B7280;">Email:</span> <a href="mailto:info@yourhealthfirst.uk" style="color: #7A6248; font-weight: 600; text-decoration: underline;">info@yourhealthfirst.uk</a><br>
                  <span style="color: #6B7280;">Telephone:</span> <a href="tel:02072253582" style="color: #7A6248; font-weight: 600; text-decoration: underline;">0207 225 3582</a> / <a href="tel:07818474041" style="color: #7A6248; font-weight: 600; text-decoration: underline;">078 1847 4041</a>
                </p>
              </div>

              <p style="margin: 25px 0 0 0; color: #1E293B;">
                Yours Sincerely,<br>
                <strong style="color: #7A6248; font-size: 16px;">YourHealthFirst Clinic</strong><br>
                <span style="font-size: 13px; color: #6B7280;">2 Wimpole Street, London W1G 0EB &bull; Harley Street District</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #2C2520; padding: 22px 30px; text-align: center; color: rgba(255, 255, 255, 0.7); font-size: 12px; line-height: 1.6;">
              <p style="margin: 0 0 6px 0; color: #FFFFFF; font-weight: 600;">YourHealthFirst Clinic</p>
              <p style="margin: 0;">2 Wimpole Street, London W1G 0EB &bull; Telephone: 0207 225 3582</p>
              <p style="margin: 6px 0 0 0; font-size: 11px; color: rgba(255, 255, 255, 0.5);">&copy; ${now.getFullYear()} Yourhealthfirst Clinic. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // ── 2. Clinic Notification Email HTML ──
    const clinicNotificationHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Enquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF7F2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #2C2520;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FAF7F2; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 640px; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(122, 98, 72, 0.08); border: 1px solid #EAE3D6;">
          
          <!-- Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #7A6248 0%, #9B8065 50%, #B49B7D 100%); padding: 28px 30px; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #F3E7C4; font-weight: 600;">Harley Street &bull; London</p>
              <h1 style="margin: 0; font-size: 24px; letter-spacing: 1px; color: #FFFFFF; font-weight: 700; text-transform: uppercase;">NEW WEBSITE ENQUIRY</h1>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: rgba(255, 255, 255, 0.9);">YourHealthFirst Clinic</p>
            </td>
          </tr>

          <!-- Timestamp Notice -->
          <tr>
            <td style="background-color: #F6F1EA; padding: 14px 24px; border-bottom: 1px solid #EAE3D6; font-size: 13px; color: #55483B;">
              <strong>Received:</strong> On ${dateStr} at ${timeStr} the following form was submitted.
            </td>
          </tr>

          <!-- Form Details -->
          <tr>
            <td style="padding: 30px 30px 20px 30px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 13px; font-weight: 700; color: #7A6248; text-transform: uppercase; letter-spacing: 0.5px; width: 170px; vertical-align: top;">
                    Page Submitted
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 14px; color: #1E293B;">
                    <a href="https://www.yourhealthfirst.uk/en#book" style="color: #7A6248; text-decoration: underline;">https://www.yourhealthfirst.uk/en#book</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 13px; font-weight: 700; color: #7A6248; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
                    First Name
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 15px; font-weight: 600; color: #1E293B;">
                    ${firstName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 13px; font-weight: 700; color: #7A6248; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
                    Last Name
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 15px; color: #1E293B;">
                    ${lastName || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 13px; font-weight: 700; color: #7A6248; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
                    Telephone Number
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 15px; font-weight: 600; color: #1E293B;">
                    ${phone ? `<a href="tel:${phone}" style="color: #7A6248; text-decoration: underline;">${phone}</a>` : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 13px; font-weight: 700; color: #7A6248; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
                    Choose a Treatment
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 15px; font-weight: 600; color: #7A6248;">
                    ${treatment || "General Enquiry"}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 13px; font-weight: 700; color: #7A6248; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
                    Email
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 15px; color: #1E293B;">
                    <a href="mailto:${email}" style="color: #7A6248; text-decoration: underline; font-weight: 600;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 13px; font-weight: 700; color: #7A6248; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
                    Where heard from us
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #F1ECE4; font-size: 14px; color: #4B5563;">
                    ${source || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0 8px 0; font-size: 13px; font-weight: 700; color: #7A6248; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
                    Message
                  </td>
                  <td style="padding: 12px 0 8px 0; font-size: 14px; color: #374151; line-height: 1.6;">
                    ${message ? message.replace(/\n/g, '<br>') : 'No message provided.'}
                  </td>
                </tr>
              </table>

              <!-- Confirmation Note Section with Full Active Links -->
              <div style="margin-top: 30px; padding: 22px; background-color: #FAF7F2; border: 1px solid #EAE3D6; border-radius: 8px;">
                <p style="margin: 0 0 12px 0; font-size: 13px; font-weight: 700; color: #7A6248; text-transform: uppercase; letter-spacing: 0.5px;">
                  The contact received in their email (<a href="mailto:${email}" style="color: #7A6248; text-decoration: underline;">${email}</a>) the following confirmation message:
                </p>
                <div style="background-color: #FFFFFF; border: 1px solid #E2D9CC; border-radius: 6px; padding: 20px; font-size: 14px; color: #374151; line-height: 1.65;">
                  <p style="margin: 0 0 16px 0; font-size: 13px;">
                    <a href="https://www.yourhealthfirst.uk/en" style="color: #7A6248; text-decoration: underline; font-weight: 600; margin-right: 14px;">Home</a>
                    <a href="https://www.yourhealthfirst.uk/en/treatments" style="color: #7A6248; text-decoration: underline; font-weight: 600; margin-right: 14px;">Services</a>
                    <a href="https://www.yourhealthfirst.uk/en/about-us" style="color: #7A6248; text-decoration: underline; font-weight: 600; margin-right: 14px;">About us</a>
                    <a href="https://www.yourhealthfirst.uk/en/gallery" style="color: #7A6248; text-decoration: underline; font-weight: 600;">Gallery</a>
                  </p>
                  <p style="margin: 0 0 12px 0; font-weight: 600; color: #1E293B;">Dear ${firstName},</p>
                  <p style="margin: 0 0 12px 0; font-weight: 600; color: #7A6248;">Welcome to YourHealthFirst.</p>
                  <p style="margin: 0 0 12px 0;">Thank you for requesting a consultation with <strong>YourHealthFirst Clinic</strong>. We appreciate you selecting us as a trusted source to advise and help you with your needs.</p>
                  <p style="margin: 0 0 12px 0;">One of our team members will be in contact shortly to collect a bit more information and schedule an appointment. In the meantime, please feel free to have a look at our <a href="https://www.yourhealthfirst.uk/en/gallery" style="color: #7A6248; text-decoration: underline; font-weight: 600;">image gallery</a> to see before and after treatment results or browse through our patients <a href="https://www.google.com/search?q=YourHealthFirst+Clinic#mpd=~15060418522766184397/customers/reviews" target="_blank" style="color: #7A6248; text-decoration: underline; font-weight: 600;">Reviews</a>.</p>
                  <p style="margin: 0 0 12px 0; font-size: 13px; color: #555555; font-style: italic;">If your consultation request is regarding a promotion, please remember to mention this.</p>
                  <p style="margin: 0 0 12px 0; font-size: 13px;">Please note: We are not able to take payment via email. We understand that it might not always be possible for you to answer the phone so, if there's a particular day or time that would be best for us to give you a call, simply let us know by replying to this email or contacting us at: <a href="mailto:info@yourhealthfirst.uk" style="color: #7A6248; text-decoration: underline; font-weight: 600;">info@yourhealthfirst.uk</a></p>
                  <p style="margin: 16px 0 0 0;">
                    Yours Sincerely,<br>
                    <strong style="color: #7A6248;">YourHealthFirst Clinic</strong>
                  </p>
                </div>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #2C2520; padding: 18px 30px; text-align: center; color: rgba(255, 255, 255, 0.7); font-size: 12px;">
              <p style="margin: 0;">YourHealthFirst Clinic &bull; 2 Wimpole Street, London W1G 0EB &bull; Harley Street</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    const clinicSubject = `Yourhealthfirst Clinic Enquiry "${fullName}"`;

    // Send Clinic Notification Email
    const clinicEmailPromise = resend.emails.send({
      from: "Yourhealthfirst Clinic <info@yourhealthfirst.uk>",
      to: ["info@yourhealthfirst.uk"],
      cc: ["Sofiabouzi@hotmail.com"],
      replyTo: email,
      subject: clinicSubject,
      html: clinicNotificationHtml,
    });

    // Send Patient Confirmation Email
    const patientEmailPromise = resend.emails.send({
      from: "Yourhealthfirst Clinic <info@yourhealthfirst.uk>",
      to: [email],
      replyTo: "info@yourhealthfirst.uk",
      subject: "Consultation Request Confirmation — Yourhealthfirst Clinic",
      html: patientConfirmationHtml,
    });

    const [clinicResult, patientResult] = await Promise.allSettled([
      clinicEmailPromise,
      patientEmailPromise,
    ]);

    if (clinicResult.status === "rejected") {
      console.error("Clinic email failed to send:", clinicResult.reason);
    }
    if (patientResult.status === "rejected") {
      console.error("Patient confirmation email failed to send:", patientResult.reason);
    }

    return NextResponse.json({
      success: true,
      clinic: clinicResult.status === "fulfilled" ? clinicResult.value : null,
      patient: patientResult.status === "fulfilled" ? patientResult.value : null,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
