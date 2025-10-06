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
  Typography
} from "antd";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react"; // 👈 Import useRef

const { TextArea } = Input;
const { Sider } = Layout;

export default function UserChatBox() {
  const [isSiderOpen, setIsSiderOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const { uid } = useParams();
  const { users } = useUser();
  const [newMessage, setNewMessage] = useState("");
  const myUid = "LV10000";
  // 👈 1. Create a ref for the message container
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const selectedUser: User | undefined = useMemo(() => {
    return users.find((user) => user.id === uid);
  }, [users, uid]);

  useEffect(() => {
    const fetchMessage = async (uid: string) => {
      try {
        const response = await fetch(`/data/messages/${uid}.json`);
        const data = await response.json();
        // 👈 Optional: If you want messages fetched in time-order but displayed reverse,
        // you don't need to reverse it here. The messages in your JSON likely need
        // to be sorted by date/time ascending for the display logic below to work.
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

  // 👈 2. Add function to scroll to the bottom
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg: Message = {
      message: newMessage,
      sender: myUid,
      receiver: uid as string,
    };

    setMessages((prevMessages) => [...prevMessages, newMsg]);
    setNewMessage("");
  };

  // Note: Added `onClick={handleSendMessage}` to the Send button below

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
            // You can use flex-direction: column-reverse if you want the *first* message to be at the bottom,
            // but the standard is to map normally (oldest at top, newest at bottom) and rely on auto-scroll.
            display: "flex",
            flexDirection: "column",
          }}
          // 👈 4. Attach the ref to the scrollable container
          ref={messagesEndRef}
        >
          <Flex vertical style={{ width: "100%" }}>
            {/* Messages are already mapped in the correct order (oldest to newest) 
            assuming your data is ordered that way. The scroll to bottom handles showing 
            the latest. If your messages array is newest-to-oldest, you must reverse it here: 
            {messages.slice().reverse().map(...) */}
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
                      margin: "2px 0",
                    }}
                  >
                    <Typography.Text>{msg.message}</Typography.Text>
                  </Card>
                </div>
              );
            })}
          </Flex>
        </Card>

        <Flex>
          <TextArea
            placeholder="Write your message"
            allowClear
            onChange={onTextInputChange}
            showCount
            size="large"
            autoSize={{ minRows: 2, maxRows: 2 }}
            value={newMessage}
          />
          <Button
            disabled={!newMessage}
            style={{ height: "100%", padding: "0 36px" }}
            onClick={handleSendMessage}
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
