import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React from "react";

export const placeholderStyles = cva(
  "relative overflow-hidden rounded-md border border-dashed opacity-75 px-4 flex items-center justify-center"
);

export const svgStyles = cva("stroke-border absolute inset-0 size-full");

export interface PlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}
export const Placeholder = React.forwardRef<HTMLDivElement, PlaceholderProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp className={placeholderStyles({ className })} ref={ref} {...props}>
        <svg className={svgStyles()} fill="none">
          <defs>
            <pattern
              id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
            </pattern>
          </defs>
          <rect
            stroke="none"
            fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
            width="100%"
            height="100%"
          />
        </svg>
      </Comp>
    );
  }
);
Placeholder.displayName = "Placeholder";

export default Placeholder;
