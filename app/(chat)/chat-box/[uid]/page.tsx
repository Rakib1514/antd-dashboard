"use client";

import useUser from "@/hooks/useUser";
import { Message } from "@/types/message";
import { User } from "@/types/users";
import { InfoOutlined, SendOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Flex,
  Input,
  Layout,
  Space,
  Typography,
} from "antd";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const { TextArea } = Input;

const { Sider } = Layout;

export default function UserChatBox() {
  const [isSiderOpen, setIsSiderOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const { uid } = useParams();
  const { users } = useUser();
  const [newMessage, setNewMessage] = useState("");
  const myUid = "LV10000";

  const selectedUser: User | undefined = useMemo(() => {
    return users.find((user) => user.id === uid);
  }, [users, uid]);

  useEffect(() => {
    const fetchMessage = async (uid: string) => {
      try {
        const response = await fetch(`/data/messages/${uid}.json`);
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessage(uid as string);
  }, [uid]);

  const onTextInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setNewMessage(e.target.value);
  };

  return (
    <Layout>
      <Layout style={{ padding: " 0 16", margin: " 0 16px" }}>
        <Card style={{ width: "100%", padding: 0, marginBottom: 4 }}>
          <Flex justify="space-between" align="center">
            <Typography.Title
              level={4}
              style={{ lineHeight: 0, margin: 0, padding: 0 }}
            >
              {selectedUser?.fullName}
            </Typography.Title>
            <Button onClick={() => setIsSiderOpen(!isSiderOpen)}>
              <InfoOutlined />
            </Button>
          </Flex>
        </Card>
        <Card
          style={{
            width: "100%",
            height: "calc(100vh - 250px)",
            overflowY: "auto",
          }}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            {messages.map((msg, idx) => {
              const sendByMe = msg.sender === myUid;
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: sendByMe ? "flex-end" : "flex-start",
                  }}
                >
                  <Card
                    size="small"
                    style={{
                      maxWidth: "60%",
                      backgroundColor: sendByMe ? "#bae7ff" : "#f5f5f5",
                      borderRadius: 12,
                      wordBreak: "break-word",
                    }}
                  >
                    <Typography.Text>{msg.message}</Typography.Text>
                  </Card>
                </div>
              );
            })}
          </Space>
        </Card>

        <Flex>
          <TextArea
            placeholder="textarea with clear icon"
            allowClear
            onChange={onTextInputChange}
            showCount
            size="large"
            autoSize={{ minRows: 2, maxRows: 3 }}
          />
          <Button
            disabled={!newMessage}
            style={{ height: "100%", padding: "0 36px" }}
          >
            <SendOutlined />
          </Button>
        </Flex>
      </Layout>

      <Sider
        width={300}
        style={{ height: "calc(100vh - 80px)", overflowY: "scroll" }}
        collapsed={!isSiderOpen}
        collapsedWidth={0}
      >
        {selectedUser && (
          <Card style={{ textAlign: "center", background: "transparent" }}>
            <Avatar size={120} src={selectedUser.avatar} />
            <Typography.Title level={3}>
              {selectedUser.fullName}
            </Typography.Title>
            <Typography.Text>Other Info</Typography.Text>
          </Card>
        )}
      </Sider>
    </Layout>
  );
}
