import { composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tailwind: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tailwind, className));
}

const focusRing = tv({
  variants: {
    isFocused: { true: "ring-ring/20 data-invalid:ring-danger/20 ring-4 outline-hidden" },
    isFocusVisible: { true: "ring-ring/20 ring-4 outline-hidden" },
    isInvalid: { true: "ring-danger/20 ring-4" },
  },
});

const focusStyles = tv({
  extend: focusRing,
  variants: {
    isFocused: { true: "border-ring/70 forced-colors:border-[Highlight]" },
    isInvalid: { true: "border-danger/70 forced-colors:border-[Mark]" },
  },
});

const focusButtonStyles = tv({
  base: "outline-ring outline outline-offset-2 forced-colors:outline-[Highlight]",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2",
    },
  },
});

export { composeTailwindRenderProps, focusRing, focusStyles, focusButtonStyles };
