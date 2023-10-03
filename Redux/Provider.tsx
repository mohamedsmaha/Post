"use client";

import store from "./Store";
import { Provider } from "react-redux"; // Import from "react-redux" for Redux Provider

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
