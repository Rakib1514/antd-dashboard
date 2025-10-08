
import { Flex, Layout } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./siderBar/Sidebar";

interface LayoutWrapperProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showSider?: boolean;
  showFooter?: boolean;
  customHeader?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function LayoutWrapper({
  children,
  showHeader = true,
  showSider = true,
  showFooter = true,
  customHeader,
  style,
}: LayoutWrapperProps) {
  return (
    <Layout style={style}>
      {showHeader && <Navbar />}

      <Layout>
        {showSider && <Sidebar />}
        <Flex vertical style={{ width: "100%" }}>
          {customHeader && customHeader}
          <Layout>{children}</Layout>
        </Flex>
      </Layout>
      {showFooter && <div>Footer</div>}
    </Layout>
  );
}
