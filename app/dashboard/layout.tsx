"use client";

import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import {
  Divider,
  Layout,
  Menu,
  MenuItemProps,
  MenuProps,
  Space,
  theme,
  Typography
} from "antd";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useState } from "react";
const { Sider } = Layout;
const { useToken } = theme;

type MenuItem = Required<MenuProps>["items"][number];

const { Text } = Typography;

export default function DashboardLayout({ children }: PropsWithChildren) {
  const [isSiderCollapsed, setIsSiderCollapsed] = useState(false);
  const router = useRouter();

  const { token } = useToken();

  const onMenuItemClick: MenuItemProps["onClick"] = (e) => {
    router.push(e.key);
  };

  const items: MenuItem[] = [
    { key: "/dashboard", icon: <PieChartOutlined />, label: "Dashboard" },
    {
      key: "/dashboard/food-order",
      icon: <DesktopOutlined />,
      label: "Food order",
    },
    {
      key: "/dashboard/manage-menu",
      icon: <ContainerOutlined />,
      label: "Manage Menu",
    },
    {
      key: "/custom-review",
      icon: <ContainerOutlined />,
      label: "Custom Review",
    },
  ];
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

        <Menu
          defaultSelectedKeys={["/dashboard"]}
          onClick={onMenuItemClick}
          mode="inline"
          theme="light"
          items={items}
          style={{
            backgroundColor: token.colorBgPrimary50,
            color: token.colorBlack,
          }}
        />
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
        <Layout className="max-w-6xl w-full min-h-screen mx-auto ">
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
}
