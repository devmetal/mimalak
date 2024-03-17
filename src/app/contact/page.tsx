import AppBar from "@/components/AppBar";
import ContactForm from "@/components/ContactForm";
import Wave from "@/components/Wave";

export default function Page() {
  return (
    <>
      <AppBar />
      <main className="flex justify-center p-4 relative">
        <Wave />
        <ContactForm />
      </main>
    </>
  );
}
