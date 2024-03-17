import { z } from "zod";

const schema = z.object({
  MAIL_API_KEY: z.string(),
  NEXT_PUBLIC_CAPTCHA_SITE_KEY: z.string(),
  CAPTCHA_SECRET: z.string(),
  MAIL_RECIPIENT_EMAIL: z.string(),
  MAIL_RECIPIENT_NAME: z.string(),
  MAIL_SENDER_EMAIL: z.string(),
  MAIL_SENDER_NAME: z.string(),
  NODE_ENV: z.enum(["production", "development", "test"]),
});

export type EnvSchema = z.infer<typeof schema>;

const validated = schema.safeParse(process.env);

if (!validated.success) {
  console.error(validated.error.flatten().fieldErrors);
  throw new Error("Environment schema validation issue");
}

export const env = validated.data;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchema {}
  }
}
