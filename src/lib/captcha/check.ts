const captchaSecret = process.env.CAPTCHA_SECRET;
const base = "https://www.google.com/recaptcha/api/siteverify";

export default async function checkCaptcha(captcha: string): Promise<boolean> {
  const response = await fetch(
    `${base}?secret=${captchaSecret}&response=${captcha}`,
    {
      method: "POST",
      cache: "no-cache",
    }
  );

  if (!response.ok) {
    return false;
  }

  const body = await response.json();

  if (!body.success) {
    return false;
  }

  return true;
}
