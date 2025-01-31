import { RegisterForm } from "@/components/register-form";
import useTitle from "@/hooks/use-title.hook";

export default function RegisterPage() {
  useTitle("Register");
  return <RegisterForm />;
}
