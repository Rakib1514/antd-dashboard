"use client";

import { Button, Layout, Space, theme, Typography } from "antd";
import { HomeOutlined, DashboardOutlined, UserOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";

const { Header } = Layout;
const { Text } = Typography;

export default function Navbar() {
  const { token } = theme.useToken();
  const router = useRouter();
  const pathName = usePathname()

  const navbarItems = [
    { key: "/", icon: <HomeOutlined />, label: "Home" },
    { key: "/dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "/profile", icon: <UserOutlined />, label: "Profile" },
    { key: "/sign-in", icon: <UserOutlined />, label: "Sign In" },
  ];

  return (
    <Header
      style={{
        background: "white",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Space align="center" style={{ height: 40, marginRight: 24 }}>
        <span
          style={{
            fontSize: "11px",
            backgroundColor: token.colorPrimary,
            fontWeight: "bold",
            padding: "4px 7px",
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

      <Space size={0} style={{ display: "flex" }}>
        {navbarItems.map((item) => (
          <Button
            key={item.key}
            icon={item.icon}
            type={pathName === item.key ? "primary" : "default"}
            onClick={() => router.push(item.key)}
            style={{
              borderRadius: 0,
              marginLeft: 0,
            }}
          >
            {item.label}
          </Button>
        ))}
      </Space>
    </Header>
  );
}
