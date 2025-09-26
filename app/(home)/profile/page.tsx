"use client";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Image, Layout, List, Row, Typography } from "antd";



export default function Profile() {
  const { Text } = Typography;
  // Dummy posts
  const posts = [
    { title: "My First Post", content: "Lorem ipsum dolor sit amet..." },
    { title: "Another Post", content: "Consectetur adipiscing elit..." },
    { title: "React Tips", content: "Using Ant Design is fun!" },
  ];

  return (
    <Layout style={{ padding: "0 24px" }}>
      {/* Cover Image */}
      <Row>
        <Col
          span={24}
          style={{
            height: 200,
            position: "relative",
          }}
        >
          <Image
            alt="cover"
            height={200}
            width="100%"
            src="https://i.ibb.co.com/6R2vG8RX/36291915-8406236-1.jpg"
            preview={false}
            style={{ objectFit: "cover", height: "100%" }}
          />

          {/* Avatar on top of cover */}
          <Avatar
            src="https://i.ibb.co.com/JjPTkdWc/abbat-uzk-Nxb-Pr-N9-E-unsplash-1.jpg"
            size={100}
            icon={<UserOutlined />}
            style={{
              position: "absolute",
              bottom: -50,
              left: 24,
              border: "3px solid white",
            }}
          />
        </Col>
      </Row>

      <div style={{ height: 60 }} />

      <Row gutter={16}>
        <Col span={18}>
          <Card title="Posts">
            <List
              dataSource={posts}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<Text strong>{item.title}</Text>}
                    description={item.content}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>

       
        <Col span={6}>
          <Card title="Profile Info">
            <Text strong>Name: John Doe</Text>
            <br />
            <Text>Email: john@example.com</Text>
            <br />
            <Text>Location: New York, USA</Text>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
