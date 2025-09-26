"use client";

import DashboardHeader from "@/components/DashboardHeader";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Spin } from "antd";
import { PropsWithChildren, useEffect, useState } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <LayoutWrapper showSider customHeader={<DashboardHeader />}>
      {children}
    </LayoutWrapper>
  );
}
