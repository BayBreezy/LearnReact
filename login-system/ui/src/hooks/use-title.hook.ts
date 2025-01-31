import { TITLE_TEMPLATE } from "@/lib/constants";
import { useTitle as _useTitle } from "react-use";

/**
 * Hook to set the title of the page
 */
export default function useTitle(title?: string) {
  title = title || TITLE_TEMPLATE;
  _useTitle(`${title} • ${TITLE_TEMPLATE}`);
}
