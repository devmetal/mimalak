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

export default function ContactForm() {
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
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Név</Label>
              <Input id="name" placeholder="" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Telefonszám</Label>
              <Input type="text" id="phone" placeholder="" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">Üzenet</Label>
              <Textarea id="message" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Mégsem</Button>
        <Button>Elküld</Button>
      </CardFooter>
    </Card>
  );
}
