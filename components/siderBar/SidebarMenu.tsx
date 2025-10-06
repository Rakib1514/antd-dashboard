"use client";

import {
  CalendarOutlined,
  ContainerOutlined,
  DesktopOutlined,
  HomeOutlined,
  PieChartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Menu, MenuItemProps, MenuProps, theme } from "antd";
import { useRouter } from "next/navigation";
const { useToken } = theme;

type MenuItem = Required<MenuProps>["items"][number];

export default function SidebarMenu() {
  const router = useRouter();
  const { token } = useToken();

  const onMenuItemClick: MenuItemProps["onClick"] = (e) => {
    router.push(e.key);
  };

  const mainDashboardMenu: MenuItem[] = [
    { key: "/dashboard", icon: <PieChartOutlined />, label: "Dashboard" },
    {
      key: "/dashboard/food-menu",
      icon: <DesktopOutlined />,
      label: "Food Menu",
    },
    {
      key: "/chat-box",
      icon: <ContainerOutlined />,
      label: "Message us",
    },
    {
      key: "/dashboard/customer-review",
      icon: <StarOutlined />,
      label: "Customer Review",
    },
    {
      key: "/dashboard/create-schedule",
      icon: <StarOutlined />,
      label: "Crate Schedule",
    },
    {
      key: "/dashboard/view-calender",
      icon: <CalendarOutlined />,
      label: "View Calender",
    },
    { type: "divider", style: { margin: "16px 0" } },
    {
      key: "/",
      icon: <HomeOutlined />,
      label: "Home",
    },
  ];

  return (
    <Menu
      defaultSelectedKeys={["/dashboard"]}
      onClick={onMenuItemClick}
      mode="inline"
      theme="light"
      items={mainDashboardMenu}
      style={{
        backgroundColor: token.colorBgPrimary50,
        color: token.colorBlack,
      }}
    />
  );
}





