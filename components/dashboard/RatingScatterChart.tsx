import { Flex, theme, Typography } from "antd";
import BubbleChart from "../PieChartRating";
const { Text } = Typography;

export default function RatingScatterChart() {
  const { token } = theme.useToken();

  const ratingArr = [
    {
      title: "hygin",
      value: 85,
      color: "#149D52",
    },
    {
      title: "hygin",
      value: 60,
      color: "#149D52",
    },
    {
      title: "hygin",
      value: 30,
      color: "#149D52",
    },
  ];

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

      <BubbleChart />
    </>
  );
}
