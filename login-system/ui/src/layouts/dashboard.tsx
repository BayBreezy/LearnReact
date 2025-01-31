import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth.context";
import { LogOutIcon } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router";
import { toast } from "sonner";

export const DashboardLayout = () => {
  const { logout, setUser } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout({
      fetchOptions: {
        async onSuccess() {
          setUser(undefined);
          navigate("/");
          toast.success("You have been logged out.", {
            description: "You will be redirected to the login page.",
          });
        },
      },
    });
  };
  return (
    <div className="flex h-full flex-col">
      <header className="sticky top-0 z-10 shrink-0 border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-5">
          <Link className="text-lg font-semibold" to="/dashboard/profile">
            LR • ACME
          </Link>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button title="Click to logout" onClick={handleLogout} size="icon" variant="outline">
              <LogOutIcon className="size-4" />
              <span className="sr-only">Logout</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
