"use client";

import useUser from "@/hooks/useUser";
import { Avatar, Button, Layout, Space, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Text, Paragraph } = Typography;

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { users } = useUser();
  const pathname = usePathname();

  return (
    <Layout>
      <Sider
        width={260}
        style={{ height: "calc(100vh - 80px)", overflowY: "auto" }}
      >
        {users.map((user) => {
          const isActive = pathname === `/chat-box/${user.id}`;
          return (
            <Link key={user.id} href={`/chat-box/${user.id}`} passHref>
              <Button
                type={isActive ? "primary" : "dashed"}
                size="large"
                style={{
                  width: "100%",
                  height: "auto",
                  justifyContent: "flex-start",
                  padding: "20px 16px",
                  color: isActive ? "#fff" : "inherit",
                }}
              >
                <Avatar
                  size={60}
                  src={user.avatar || "https://i.ibb.co.com/th2hZBc/a.png"}
                  style={{ flexShrink: 0 }}
                />
                <Space direction="vertical" style={{ textAlign: "start" }}>
                  <Text strong>{user.fullName}</Text>
                  <Paragraph
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      width: "120px",
                    }}
                    ellipsis
                  >
                    {user.lastMessage}
                  </Paragraph>
                </Space>
              </Button>
            </Link>
          );
        })}
      </Sider>

      <Layout>{children}</Layout>
    </Layout>
  );
}
