"use server";

import { MailerSend, Recipient, EmailParams, Sender } from "mailersend";
import { redirect } from "next/navigation";
import { z } from "zod";

const mailersend = new MailerSend({
  apiKey: process.env.MAIL_API_KEY || "",
});

const recipient = [new Recipient(process.env.MAIL_RECIPIENT ?? "", "Mimalak")];

const schema = z.object({
  name: z.string().max(255),
  email: z.string().email(),
  phone: z.string().max(64).optional(),
  message: z.string().max(1024),
  captcha: z.string().min(100),
});

export type FormInput = z.infer<typeof schema>;

export default async function makeContact(prevState: any, data: FormData) {
  const submitted = schema.safeParse(Object.fromEntries(data.entries()));

  if (!submitted.success) {
    return {
      message: "invalid" as const,
      errors: submitted.error.flatten().fieldErrors,
    };
  }

  const email = new EmailParams()
    .setFrom(
      new Sender(
        "MS_rsVmh2@trial-vywj2lpxrkp47oqz.mlsender.net",
        "Mima Weboldal"
      )
    )
    .setTo(recipient)
    .setSubject("Mima Weboldal Megkeresés").setHtml(`
        <p>Üzenet érkezett a weboldalról</p>
        <table>
          <tr>
            <th>Email</th>
            <td>${submitted.data.email}</td>
          </tr>
          <tr>
            <th>Név</th>
            <td>${submitted.data.name}</td>
          </tr>
          <tr>
            <th>Telefonszám</th>
            <td>${submitted.data.phone ?? "Nem adta meg"}</td>
          </tr>
        </table>
        <p>Üzenet szövege:</p>
        <p>${submitted.data.message}<p>
    `);

  await mailersend.email.send(email);

  return redirect("/thanks");
}
