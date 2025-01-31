import { authClient } from "@/lib/auth-client";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useLoader } from "./loader.context";

export type LoginData = { email: string; password: string };
export type RegisterData = LoginData & { name: string };

export type AuthContextType = {
  user?: typeof authClient.$Infer.Session.user;
  session?: typeof authClient.$Infer.Session.session;
  login: (args: LoginData) => Promise<void>;
  logout: typeof authClient.signOut;
  register: (args: RegisterData) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<typeof authClient.$Infer.Session.user | undefined>>;
  setSession: React.Dispatch<
    React.SetStateAction<typeof authClient.$Infer.Session.session | undefined>
  >;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<typeof authClient.$Infer.Session.user | undefined>();
  const [session, setSession] = useState<typeof authClient.$Infer.Session.session | undefined>();
  const navigate = useNavigate();
  const { setLoading } = useLoader();

  const { signIn, signOut: logout, signUp } = authClient;

  const register = async ({ email, password, name }: RegisterData): Promise<void> => {
    setLoading(true);
    await signUp.email({
      email,
      password,
      name,
      fetchOptions: {
        onRequest() {
          toast.loading("Please wait", {
            description: "Please wait while we create your account",
          });
        },
        async onSuccess(ctx) {
          setLoading(false);
          setUser(() => ctx.data?.user);
          toast("Welcome!", {
            description: "You have successfully created your account",
          });
          await navigate("/dashboard/profile");
        },
        onError(error) {
          setLoading(false);
          toast("Failed to create account", {
            description: error.error.message,
          });
        },
      },
    });
  };

  const login = async ({ email, password }: LoginData): Promise<void> => {
    setLoading(true);
    await signIn.email({
      email,
      password,
      rememberMe: true,
      fetchOptions: {
        onRequest() {
          toast.loading("Please wait", {
            description: "Please wait while we log you in",
          });
        },
        async onSuccess(ctx) {
          setLoading(false);
          setUser(() => ctx.data?.user);
          toast("Welcome Back!", {
            description: "You have successfully logged in",
          });
          await navigate("/dashboard/profile");
        },
        onError(error) {
          setLoading(false);
          toast("Failed to login", {
            description: error.error.message,
          });
        },
      },
    });
  };
  const { data, isLoading } = useQuery({
    queryKey: ["fetch-user"],
    queryFn: async () => {
      const session = await authClient.getSession();
      setUser(session.data?.user);
      setSession(session.data?.session);
      return session;
    },
  });

  useEffect(() => {
    if (data) {
      setUser(data?.data?.user);
      setSession(data?.data?.session);
    }
  }, [data]);

  if (isLoading) return null;

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        login,
        logout,
        register,
        setUser,
        setSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
