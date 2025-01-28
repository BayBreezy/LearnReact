import { Button } from "@/components/ui";
import { IconMoon, IconSun } from "justd-icons";
import { useTheme } from "./theme-provider.tsx";

interface Props {
  appearance?: "plain" | "outline";
}

export function ThemeSwitcher({ appearance = "plain" }: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      appearance={appearance}
      size="square-petite"
      aria-label="Switch theme"
      onPress={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <IconSun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <IconMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
