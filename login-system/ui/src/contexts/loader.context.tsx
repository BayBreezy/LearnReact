import React, { createContext, useContext, useState } from "react";

type LoaderContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

/**
 * Hook to use the loader context
 */
export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};

/**
 * Needed to display the global loader for the app
 *
 * @example
 * const { loading, setLoading } = useLoader();
 *
 *
 */
export const LoaderProvider = ({ children }: { children?: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
