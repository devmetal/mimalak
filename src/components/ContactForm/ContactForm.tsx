"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  FormEventHandler,
  MouseEventHandler,
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ReCaptcha from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import makeContact from "@/actions/makeContact";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";

const captchaSiteKey = "6Lcru34pAAAAAGw6siruKyu0s1CkA9xlpeIymThs";

export const contactFormDefState: {
  errors?: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    phone?: string[] | undefined;
    message?: string[] | undefined;
    captcha?: string[] | undefined;
  } | null;
  message: "invalid" | "";
} = {
  errors: null,
  message: "",
};

export default function ContactForm() {
  const router = useRouter();
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [state, formAction, pending] = useFormState(
    makeContact,
    contactFormDefState
  );

  const handleCancel: MouseEventHandler = useCallback((e) => {
    e.preventDefault();
    router.push("/");
  }, []);

  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <CardTitle>Lépjen velünk kapcsolatba</CardTitle>
        <CardDescription>
          Adja meg a szükséges adatokat és hamarosan felvesszük önnel a
          kapcsolatot
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} method="POST">
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
