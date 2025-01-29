import { router } from "@inertiajs/react";
import React from "react";
import { RouterProvider } from "react-aria-components";
import { TodoProvider } from "../contexts/todo.context";
import { ThemeProvider } from "./theme-provider";
import { Toast } from "./ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RouterProvider navigate={(to, options) => router.visit(to, options)}>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <Toast position="top-right" />
        <TodoProvider>{children}</TodoProvider>
      </ThemeProvider>
    </RouterProvider>
  );
}
