import { useAuth } from "@/contexts/auth.context";
import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({
  children,
  redirectTo = "/",
  replace = true,
}: {
  children?: React.ReactNode;
  redirectTo?: string;
  replace?: boolean;
}) => {
  // get the user from the auth context
  const { user } = useAuth();
  // if there is no user, redirect to the specified route
  if (!user) {
    return <Navigate to={redirectTo} replace={replace} />;
  }
  // if there is a user, render the children. If no children are passed, render the outlet
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
