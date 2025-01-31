import { LoginForm } from "@/components/login-form";
import useTitle from "@/hooks/use-title.hook";

export default function LoginPage() {
  useTitle("Login");
  return <LoginForm />;
}
