import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/auth.context";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router";

export function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password || !name) return;
    await register({ email, password, name });
  };
  return (
    <div className={cn(className)} {...props}>
      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col pb-4 text-center md:text-left">
            <h1 className="text-2xl font-bold">Create Account</h1>
            <p className="text-balance text-muted-foreground">
              Enter your details to create an account
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="John Doe"
              required
            />
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
            Register
          </Button>
          <div className="pt-4 text-center text-sm md:text-left">
            Already have an account?{" "}
            <Link to="/" className="underline underline-offset-4">
              Sign In
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
