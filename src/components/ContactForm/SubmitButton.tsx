import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function SubmitButton({
  disabled = false,
}: {
  disabled?: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending || disabled}
      disabled={pending || disabled}
    >
      {pending ? "Loading" : "Elküld"}
    </Button>
  );
}
