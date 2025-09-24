import BarChart from "@/components/BarChart";
import { CommonText } from "@/components/CommonText";
import { Button, Card, Flex, Space, theme, Typography } from "antd";
const { Title, Text } = Typography;

export default function Revenue() {
  const { token } = theme.useToken();
  return (
    <>
      <Flex justify="space-between">
        <Flex vertical gap={10}>
          <Text style={{ fontSize: "14px", lineHeight: "22px" }}>Revenue</Text>
          <Title level={4} style={{ lineHeight: "28px", margin: 0 }}>
            IDR 7.852.000
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
                d="M4.6086 11L4.6086 1.96395"
                stroke="#149D52"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.00001 4.55754L4.55761 0.999943L8.1152 4.55754"
                stroke="#149D52"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Text
              strong
              style={{
                color: "#32D16D",
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
            Sales from 1-12 Dec, 2020
          </CommonText>
        </Flex>
        <Button type="dashed" style={{ color: token.colorPrimary }}>
          View Report
        </Button>
      </Flex>
      <Card style={{ width: "100%" }}>
        <BarChart />
      </Card>
    </>
  );
}
