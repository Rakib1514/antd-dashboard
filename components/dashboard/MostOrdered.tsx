import { Flex, Image, List, theme, Typography } from "antd";
const { Text } = Typography;

export default function MostOrdered() {
  const { token } = theme.useToken();

  const mostOrderItems = [
    {
      title: "Fresh Salad Bowl",
      price: 45.0,
      imageUrl: "https://i.ibb.co/Kc5z8CJV/4b915af1cbf1e56090048f1229aed15fcc058c11-1.png"
    },
    {
      title: "Chicken Noodles",
      price: 75.0,
      imageUrl: "https://i.ibb.co/Kc5z8CJV/4b915af1cbf1e56090048f1229aed15fcc058c11-1.png"
    },
    {
      title: "Smoothie Fruits",
      price: 45.0,
      imageUrl: "https://i.ibb.co/Kc5z8CJV/4b915af1cbf1e56090048f1229aed15fcc058c11-1.png"
    },
    {
      title: "Hot Chicken Wings",
      price: 45.0,
      imageUrl: "https://i.ibb.co/Kc5z8CJV/4b915af1cbf1e56090048f1229aed15fcc058c11-1.png"
    }
  ];

  return (
    <Flex vertical gap={24}>
      <Flex vertical gap={4}>
        <Text style={{ fontSize: "14px", lineHeight: "22px" }}>
          Most Ordered Food
        </Text>
        <Text style={{ fontSize: "14px", lineHeight: "22px", color: token.colorTextSecondary }}>
          Adipiscing elit, sed do eiusmod tempor
        </Text>
      </Flex>

      <List
        itemLayout="horizontal"
        dataSource={mostOrderItems}
        renderItem={(item) => (
          <List.Item style={{ padding: "16px 0" }}>
            <List.Item.Meta
              avatar={
                <Image
                  src={item.imageUrl}
                  preview={false}
                  draggable={false}
                  alt={item.title}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    objectFit: "cover"
                  }}
                />
              }
              title={<Text style={{ fontSize: "16px", fontWeight: "500" }}>{item.title}</Text>}
            />
            <Text style={{ fontSize: "16px" }}>IDR {item.price.toFixed(3)}</Text>
          </List.Item>
        )}
      />
    </Flex>
  );
}
