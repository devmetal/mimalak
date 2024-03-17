"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import ReCaptcha from "react-google-recaptcha";
import makeContact, { ContactFormState } from "@/actions/makeContact";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";

const captchaSiteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;

export const contactFormDefState: ContactFormState = {
  errors: null,
  message: "",
};

export default function ContactForm() {
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [state, formAction, pending] = useFormState(
    makeContact,
    contactFormDefState
  );

  return (
    <Card className="w-full md:w-1/2 relative z-10 shadow-lg">
      <CardHeader>
        <CardTitle>Lépjen velünk kapcsolatba</CardTitle>
        <CardDescription className="text-sm">
          Adja meg a szükséges adatokat és hamarosan felvesszük önnel a
          kapcsolatot
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Név *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                aria-invalid={!!state.errors?.name}
                disabled={pending}
              />
              {state.errors?.name && <ErrorMessage>Hibás név</ErrorMessage>}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                aria-invalid={!!state.errors?.email}
                disabled={pending}
              />
              {state.errors?.email && (
                <ErrorMessage>Helytelen email</ErrorMessage>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Telefonszám</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                aria-invalid={!!state.errors?.phone}
                disabled={pending}
              />
              {state.errors?.phone && (
                <ErrorMessage>Hibás telefonszám</ErrorMessage>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">Üzenet *</Label>
              <Textarea
                name="message"
                id="message"
                aria-invalid={!!state.errors?.message}
                disabled={pending}
              />
              {state.errors?.message && (
                <ErrorMessage>Hibás üzenet</ErrorMessage>
              )}
            </div>
            <div className="flex flex-col space-y-1 5">
              <ReCaptcha sitekey={captchaSiteKey} onChange={setCaptcha} />
              <input type="hidden" name="captcha" value={captcha ?? ""} />
              {state.errors?.captcha && (
                <ErrorMessage>Hibás ellenőrzés</ErrorMessage>
              )}
            </div>
            <div className="flex justify-between">
              <SubmitButton disabled={!captcha} />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
