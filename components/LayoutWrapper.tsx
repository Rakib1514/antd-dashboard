"use client";

import { Flex, Layout, Space } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./siderBar/Sidebar";

interface LayoutWrapperProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showSider?: boolean;
  showFooter?: boolean;
  customHeader?: React.ReactNode;
}

export default function LayoutWrapper({
  children,
  showHeader,
  showSider,
  showFooter,
  customHeader,
}: LayoutWrapperProps) {
  return (
    <Layout>
      {showHeader && <Navbar />}

      <Layout>
        {showSider && <Sidebar />}
        <Flex vertical>
          {customHeader && customHeader}
          <Layout>{children}</Layout>
        </Flex>
      </Layout>
      {showFooter && <div>Footer</div>}
    </Layout>
  );
}
