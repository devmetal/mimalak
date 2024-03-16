import AppBar from "@/components/AppBar";
import ImageBar from "@/components/ImageBar";
import { AlertDescription, Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <AppBar />
      <main>
        <ImageBar />
      </main>
      <main className="flex justify-center p-16">
        <Alert>
          <AlertTitle>Köszönjük</AlertTitle>
          <AlertDescription>
            Köszönjük megkeresését!
            <p>Hamarosan felvesszük önnel a kapcsolatot</p>
            <p>
              <Link href="/" replace>
                <Button>Vissza a fő oldalra</Button>
              </Link>
            </p>
          </AlertDescription>
        </Alert>
      </main>
    </>
  );
}
