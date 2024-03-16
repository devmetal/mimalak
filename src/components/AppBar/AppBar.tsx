import Link from "next/link";
import { Button } from "../ui/button";

function AppBar() {
  return (
    <nav className="p-4 flex items-baseline gap-4">
      <h1 className="flex-1 underline cursor-pointer">
        <Link href="/">MIMA-LAK Kft</Link>
      </h1>

      <Link href="/contact">
        <Button>Kapcsolat</Button>
      </Link>
    </nav>
  );
}

export default AppBar;
