"use client";

import MostOrdered from "@/components/dashboard/MostOrdered";
import Order from "@/components/dashboard/Order";
import OrderTime from "@/components/dashboard/OrderTime";
import RatingScatterChart from "@/components/dashboard/RatingScatterChart";
import RevenueCol from "@/components/dashboard/Revenue";
import { Col, Row, theme, Typography } from "antd";

const { Title } = Typography;

export default function Dashboard() {
  const { token } = theme.useToken();

  return (
    <div className="">
      <Title level={4} style={{ margin: "40px 0 " }}>
        Dashboard
      </Title>

      <Row>
        <Col
          span={16}
          style={{
            paddingRight: "40px",
            paddingBottom: "40px",
            borderRight: `1px solid ${token.colorBorderPrimary}`,
            borderBottom: `1px solid ${token.colorBorderPrimary}`,
          }}
        >
          <RevenueCol />
        </Col>

        <Col
          span={8}
          style={{
            paddingLeft: "40px",
            borderBottom: `1px solid ${token.colorBorderPrimary}`,
          }}
        >
          <OrderTime />
        </Col>

        <Col
          span={8}
          style={{
            paddingTop: "40px",
            paddingRight: "40px",
            borderRight: `1px solid ${token.colorBorderPrimary}`,
          }}
        >
          <RatingScatterChart />
        </Col>

        <Col
          span={8}
          style={{
            padding: "40px",
            paddingBottom: "0px",
            borderRight: `1px solid ${token.colorBorderPrimary}`,
          }}
        >
          <MostOrdered />
        </Col>
        <Col span={8} style={{ paddingTop: "40px", paddingLeft: "40px" }}>
          <Order />
        </Col>
      </Row>
    </div>
  );
}
