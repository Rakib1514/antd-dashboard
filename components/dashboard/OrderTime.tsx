import { CommonText } from "@/components/CommonText";
import { Button, Flex, theme, Typography } from "antd";
import DonutChart from "../DonutChart";
const { Text } = Typography;

export default function OrderTime() {
  const { token } = theme.useToken();

  return (
    <>
      <Flex justify="space-between">
        <Flex vertical gap={10}>
          <Text style={{ fontSize: "14px", lineHeight: "22px" }}>
            Order Time
          </Text>

          <Text
            style={{
              fontSize: "12px",
              lineHeight: "12px",
              color: token.colorGray,
            }}
          >
            From 1-6 Dec, 2020
          </Text>

          <CommonText style={{ marginTop: "14px", marginBottom: "20px" }}>
            Sales from 1-12 Dec, 2020
          </CommonText>
        </Flex>
        <Button type="dashed" style={{ color: token.colorPrimary }}>
          View Report
        </Button>
      </Flex>
      <DonutChart/>
    </>
  );
}
