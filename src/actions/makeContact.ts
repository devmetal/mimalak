"use server";

import "@/lib/envs";
import checkCaptcha from "@/lib/captcha/check";
import sendContactEmail from "@/lib/email/sender";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  name: z.string().max(255),
  email: z.string().email(),
  phone: z.string().max(64).optional(),
  message: z.string().max(1024),
  captcha: z.string(),
});

export type ContactFormInput = z.infer<typeof schema>;

export type ContactFormState = {
  errors?: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    phone?: string[] | undefined;
    message?: string[] | undefined;
    captcha?: string[] | undefined;
  } | null;
  message: "invalid" | "ok" | "";
};

export default async function makeContact(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const input = Object.fromEntries(data.entries());
  const submitted = schema.safeParse(input);

  if (!submitted.success) {
    return {
      message: "invalid" as const,
      errors: submitted.error.flatten().fieldErrors,
    };
  }

  const {
    data: { captcha, email, name, phone, message },
  } = submitted;

  if (!(await checkCaptcha(captcha))) {
    return {
      message: "invalid" as const,
      errors: {
        captcha: ["Invalid captcha"],
      },
    };
  }

  if (process.env.NODE_ENV === "development") {
    console.log("email sending demo");
    console.log({ email, message, phone, name });
    await new Promise((res) => setTimeout(res, 3000));
    return redirect("/thanks");
  }

  await sendContactEmail({ name, email, message, phone });
  return redirect("/thanks");
}
