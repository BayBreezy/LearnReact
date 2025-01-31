import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/auth.context";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;
    await login({ email, password });
  };
  return (
    <div className={cn(className)} {...props}>
      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col pb-4 text-center md:text-left">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-balance text-muted-foreground">Login to your Acme Inc account</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <div className="pt-4 text-center text-sm md:text-left">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
