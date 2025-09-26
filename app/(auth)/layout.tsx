"use client";

import { Carousel, Col, Image, Layout, Row, Space, theme, Typography } from "antd";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  const { token } = theme.useToken();
  const { Title, Paragraph } = Typography;

  const carouselImages = [
    "https://i.ibb.co.com/6R2vG8RX/36291915-8406236-1.jpg",
    "https://i.ibb.co.com/Txv4WtmB/20030255-6220339.jpg",
    "https://i.ibb.co.com/6R2vG8RX/36291915-8406236-1.jpg",
    "https://i.ibb.co.com/Txv4WtmB/20030255-6220339.jpg",
  ];

  return (
    <Layout style={{ maxWidth: "1920px", margin: "0 auto" }}>
      <Row>
        <Col
          span={12}
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            backgroundColor: token.colorBgPrimary50,
            textAlign: "center",
          }}
        >
          <Space direction="vertical" size="middle">
            <Title level={1}>Welcome to GoodFood</Title>
            <Paragraph
              style={{
                fontSize: "1.2rem",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              Discover and order the most delicious food from local restaurants.
              GoodFood makes it easy to explore your favorite meals and enjoy
              them at home.
            </Paragraph>
          </Space>

          <Carousel
            autoplay
            style={{
              width: "500px",
              marginTop: "2rem",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {carouselImages.map((src, index) => (
              <div key={index}>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  preview={false}
                  width={600}
                  height={300}
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
              </div>
            ))}
          </Carousel>
        </Col>

        <Col span={12}>{children}</Col>
      </Row>
    </Layout>
  );
}
