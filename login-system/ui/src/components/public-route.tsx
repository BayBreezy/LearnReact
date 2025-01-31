import { useAuth } from "@/contexts/auth.context";
import { Navigate, Outlet } from "react-router";

const PublicRoute = ({
  children,
  redirectTo = "/dashboard/profile",
  replace = true,
}: {
  children?: React.ReactNode;
  redirectTo?: string;
  replace?: boolean;
}) => {
  const { user } = useAuth();

  // Redirect to dashboard if already authenticated
  if (user) {
    return <Navigate to={redirectTo} replace={replace} />;
  }

  // Render children or outlet if the user is not authenticated
  return children ? children : <Outlet />;
};

export default PublicRoute;
