import { CommonText } from "@/components/CommonText";
import { Button, Card, Flex, Space, theme, Typography } from "antd";
import DoubleLineChart from "../DoubleLineChart";
const { Title, Text } = Typography;

export default function Order() {
  const { token } = theme.useToken();
  return (
    <>
      <Flex justify="space-between">
        <Flex vertical gap={10}>
          <Text style={{ fontSize: "14px", lineHeight: "22px" }}>Order</Text>
          <Title level={4} style={{ lineHeight: "28px", margin: 0 }}>
            2.568
          </Title>

          <Space align="center">
            <svg
              width="9"
              height="10"
              viewBox="0 0 9 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5066 1L4.5066 10.0361"
                stroke="#F2383A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.1152 7.44246L4.5576 11.0001L1 7.44246"
                stroke="#F2383A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <Text
              strong
              style={{
                color: "#F2383A",
                fontSize: "12px",
                lineHeight: "12px",
              }}
            >
              2.1%
            </Text>
            <Text
              style={{
                fontSize: "12px",
                lineHeight: "12px",
                color: token.colorGray,
              }}
            >
              vs last week
            </Text>
          </Space>

          <CommonText style={{ marginTop: "14px", marginBottom: "20px" }}>
            Sales from 1-6 Dec, 2020
          </CommonText>
        </Flex>
        <Button type="dashed" style={{ color: token.colorPrimary }}>
          View Report
        </Button>
      </Flex>
      <Card style={{ width: "100%" }}>
        <DoubleLineChart />
      </Card>
    </>
  );
}
