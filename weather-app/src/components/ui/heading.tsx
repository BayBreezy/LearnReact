import { tv } from "tailwind-variants";

const headingStyles = tv({
  base: "text-fg font-sans tracking-tight",
  variants: {
    level: {
      1: "text-xl font-bold sm:text-2xl",
      2: "text-lg font-semibold sm:text-xl",
      3: "text-base font-semibold sm:text-lg",
      4: "text-base font-semibold",
    },
    tracking: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest",
    },
  },
});
type HeadingType = { level?: 1 | 2 | 3 | 4 } & React.ComponentPropsWithoutRef<
  "h1" | "h2" | "h3" | "h4"
>;

interface HeadingProps extends HeadingType {
  tracking?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
  className?: string | undefined;
}

const Heading = ({ className, tracking = "normal", level = 1, ...props }: HeadingProps) => {
  const Element: `h${typeof level}` = `h${level}`;
  return (
    <Element
      className={headingStyles({
        level,
        tracking,
        className,
      })}
      {...props}
    />
  );
};

export type { HeadingProps };
export { Heading };
