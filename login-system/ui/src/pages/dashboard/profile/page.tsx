import * as Card from "@/components/ui/card";
import Placeholder from "@/components/ui/placeholder";
import { useAuth } from "@/contexts/auth.context";
import useTitle from "@/hooks/use-title.hook";

export const ProfilePage = () => {
  const { user } = useAuth();
  useTitle("Profile");
  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold tracking-tight">Welcome {user?.name}</h1>
      <p className="text-muted-foreground">Here is an overview of your account.</p>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <Card.Card key={i}>
            <Card.CardContent className="pt-6">
              <Placeholder className="h-[250px] w-full" />
            </Card.CardContent>
          </Card.Card>
        ))}
      </div>
    </div>
  );
};
