import LayoutWrapper from "@/components/LayoutWrapper";
import { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <LayoutWrapper showHeader>

      {children}
      </LayoutWrapper>
    </>
  );
}
