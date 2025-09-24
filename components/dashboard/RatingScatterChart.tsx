import { Flex, Spin, theme, Typography } from "antd";
import { Suspense } from "react";
import BubbleChart from "../PieChartRating";
const { Text } = Typography;

export default function RatingScatterChart() {
  const { token } = theme.useToken();

  return (
    <>
      <Flex vertical gap={10}>
        <Text style={{ fontSize: "14px", lineHeight: "22px" }}>
          Your Rating
        </Text>

        <Text
          style={{
            fontSize: "12px",
            lineHeight: "22px",
            color: token.colorGray,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur
        </Text>
      </Flex>

      <Suspense fallback={<Spin size="large" />}>
        <BubbleChart />
      </Suspense>
    </>
  );
}
