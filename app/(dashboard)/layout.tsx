"use client";

import SidebarMenu from "@/components/SidebarMenu";
import {
  Divider,
  Layout,
  Space,
  Spin,
  theme,
  Typography
} from "antd";
import { PropsWithChildren, useEffect, useState } from "react";
const { Sider } = Layout;
const { useToken } = theme;

const { Text } = Typography;

export default function DashboardLayout({ children }: PropsWithChildren) {
  const [isSiderCollapsed, setIsSiderCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { token } = useToken();

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
    <Layout>
      <Sider
        width={240}
        style={{ minHeight: "100vh" }}
        collapsed={isSiderCollapsed}
        onCollapse={(value) => setIsSiderCollapsed(value)}
        collapsible
      >
        <Space
          align="center"
          style={{
            height: 40,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              backgroundColor: token.colorPrimary,
              fontWeight: "bold",
              padding: "4px 6px",
              borderRadius: "50%",
              color: "white",
            }}
          >
            G
          </span>

          {!isSiderCollapsed && (
            <Text
              strong
              style={{
                fontSize: "11px",
                color: token.colorPrimary,
                transition: "all 0.3s ease-in-out",
              }}
            >
              GOODFOOD
            </Text>
          )}
        </Space>
        <Divider />

        <SidebarMenu />
      </Sider>

      <Layout>
        <Space
          align="center"
          style={{
            height: 40,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              backgroundColor: token.colorPrimary,
              fontWeight: "bold",
              padding: "4px 6px",
              borderRadius: "50%",
              color: "white",
            }}
          >
            G
          </span>

          <Text
            strong
            style={{
              fontSize: "11px",
              color: token.colorPrimary,
              transition: "all 0.3s ease-in-out",
            }}
          >
            GOODFOOD
          </Text>
        </Space>
        <Divider style={{ margin: 0 }} />
        <Layout
          style={{
            maxWidth: "1152px",
            width: "100%",
            minHeight: "100vh",
            margin: "0 auto",
          }}
        >
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
}
