import { useLoader } from "@/contexts/loader.context";
import { useLockBodyScroll } from "react-use";

export const PageLoader = () => {
  const { loading } = useLoader();
  useLockBodyScroll(loading);
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex size-full flex-col items-center justify-center bg-background/90 backdrop-blur-sm">
      <div></div>
    </div>
  );
};
