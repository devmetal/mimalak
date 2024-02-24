import AppBar from "@/components/AppBar";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <>
      <AppBar />
      <main className="flex justify-center p-4">
        <ContactForm />
      </main>
    </>
  );
}
