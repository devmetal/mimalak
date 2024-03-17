import { ContactFormInput } from "@/actions/makeContact";
import { MailerSend, Recipient, EmailParams, Sender } from "mailersend";

const mailersend = new MailerSend({
  apiKey: process.env.MAIL_API_KEY,
});

const recipient = [
  new Recipient(
    process.env.MAIL_RECIPIENT_EMAIL,
    process.env.MAIL_RECIPIENT_NAME
  ),
];

export default async function sendContactEmail(
  input: Omit<ContactFormInput, "captcha">
) {
  const { email, name, phone, message } = input;

  const emailParams = new EmailParams()
    .setFrom(
      new Sender(process.env.MAIL_SENDER_EMAIL, process.env.MAIL_SENDER_NAME)
    )
    .setTo(recipient)
    .setSubject("Mima Weboldal Megkeresés").setHtml(`
        <p>Üzenet érkezett a weboldalról</p>
        <table>
          <tr>
            <th>Email</th>
            <td>${email}</td>
          </tr>
          <tr>
            <th>Név</th>
            <td>${name}</td>
          </tr>
          <tr>
            <th>Telefonszám</th>
            <td>${phone || "Nem adta meg"}</td>
          </tr>
        </table>
        <p>Üzenet szövege:</p>
        <p>${message}<p>
    `);

  await mailersend.email.send(emailParams);
}
