import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, text } = await req.json();

 await resend.emails.send({
  from: "Portfolio Message <contact@mindofpepenet.online>",
  to: ["ralph.saladino05@gmail.com"],
  replyTo: email,
  subject: `Portfolio Message from ${name}`,
  html: `
  <div style="background-color:#f4f4f5;padding:40px 0;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
            
            <!-- Header -->
            <tr>
              <td style="background:#111827;padding:20px 30px;">
                <h2 style="color:#ffffff;margin:0;font-size:20px;">
                  📩 New Portfolio Contact
                </h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px;color:#374151;">
                <p style="margin:0 0 12px;font-size:14px;">
                  You’ve received a new message from your portfolio contact form.
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                  <tr>
                    <td style="padding:10px 0;font-size:14px;">
                      <strong>Name:</strong><br />
                      ${name}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;font-size:14px;">
                      <strong>Email:</strong><br />
                      <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
                        ${email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;font-size:14px;">
                      <strong>Message:</strong><br />
                      <div style="margin-top:6px;padding:12px;background:#f9fafb;border-left:4px solid #2563eb;border-radius:4px;line-height:1.6;">
                        ${text.replace(/\n/g, "<br />")}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f9fafb;padding:16px 30px;text-align:center;font-size:12px;color:#6b7280;">
                Sent from <strong>Your Portfolio</strong><br />
                Reply directly to respond to this message.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
  `,
});


    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
