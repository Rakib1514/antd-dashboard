"use client";

import DashboardHeader from "@/components/DashboardHeader";
import LayoutWrapper from "@/components/LayoutWrapper";
import { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         minHeight: "100vh",
  //       }}
  //     >
  //       <Spin size="large" />
  //     </div>
  //   );
  // }

  return (
    <LayoutWrapper
      showSider
      showHeader={false}
      customHeader={<DashboardHeader />}
    >
      {children}
    </LayoutWrapper>
  );
}
