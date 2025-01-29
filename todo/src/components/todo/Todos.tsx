import React from "react";

export const Todos = ({ children, ...props }: { children?: React.ReactNode }) => {
  return (
    <ul {...props} className="flex flex-col gap-3">
      {children}
    </ul>
  );
};
