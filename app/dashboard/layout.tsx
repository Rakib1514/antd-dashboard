"use client";

import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Divider, Layout, Menu, MenuItemProps, MenuProps, theme } from "antd";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useState } from "react";
const {Sider} = Layout;
const { useToken } = theme;

type MenuItem = Required<MenuProps>["items"][number];


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
        <div className="flex items-center gap-2 w-fit mx-auto my-[20px]">
          <span className="text-[11px] bg-primary font-bold px-2 py-[4px] rounded-full text-white ">
            G
          </span>

          <span
            className={`text-[11px] font-bold text-primary transition-all duration-300 ease-in-out ${
              isSiderCollapsed
                ? "opacity-0 w-0 overflow-hidden"
                : "opacity-100 w-auto"
            }`}
          >
            GOODFOOD
          </span>
        </div>
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
        <div className="flex items-center gap-2 w-fit mx-auto my-[20px]">
          <span className="text-[11px] bg-primary font-bold px-2 py-[4px] rounded-full text-white ">
            G
          </span>

          <span
            className={`text-[11px] font-bold text-primary transition-all duration-300 ease-in-out ${
              isSiderCollapsed
                ? "opacity-0 w-0 overflow-hidden"
                : "opacity-100 w-auto"
            }`}
          >
            GOODFOOD
          </span>
        </div>
        <Divider style={{ margin: 0 }} />
        <Layout className="max-w-6xl w-full min-h-screen mx-auto ">
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
}
