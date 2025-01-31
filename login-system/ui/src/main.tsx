import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./components/theme-provider.tsx";
import LoginPage from "./pages/auth/login/page.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PageLoader } from "./components/page-loader.tsx";
import ProtectedRoute from "./components/protected-route.tsx";
import PublicRoute from "./components/public-route.tsx";
import { AuthProvider } from "./contexts/auth.context.tsx";
import { LoaderProvider } from "./contexts/loader.context.tsx";
import { AuthLayout } from "./layouts/auth.tsx";
import { DashboardLayout } from "./layouts/dashboard.tsx";
import RegisterPage from "./pages/auth/register/page.tsx";
import { ProfilePage } from "./pages/dashboard/profile/page.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LoaderProvider>
        <PageLoader />
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Toaster closeButton position="top-right" richColors />
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <Routes>
                <Route element={<PublicRoute children={<AuthLayout />} />}>
                  <Route index element={<LoginPage />} />
                  <Route path="register" element={<RegisterPage />} />
                </Route>
                <Route
                  path="dashboard"
                  element={<ProtectedRoute redirectTo="/" children={<DashboardLayout />} />}
                >
                  <Route path="profile" element={<ProfilePage />} />
                </Route>
              </Routes>
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </LoaderProvider>
    </BrowserRouter>
  </StrictMode>
);
