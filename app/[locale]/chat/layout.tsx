import type { PropsWithChildren, ReactNode } from "react";
import { Provider } from "../provider";

export default function Layout({
  params: { locale },
  children,
}: PropsWithChildren<{ params: { locale: string } }>) {
  return <Provider locale={locale}>{children}</Provider>;
}
