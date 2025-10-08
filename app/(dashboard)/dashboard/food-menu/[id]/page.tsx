import { Card, Col, Row } from "antd";
import {Title, Paragraph, Text} from "@/components/Typography";

interface Dish {
  id: number;
  title: string;
  description: string;
  price: number;
}

export default async function DishDetails({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`http://localhost:3000/api/dishes`);
  const dishes: Dish[] = await res.json();
  const dish = dishes.find((d) => d.id === parseInt(params.id));

  if (!dish) {
    return (
      <Row justify="center" style={{ marginTop: 50 }}>
        <Text type="danger">Dish not found</Text>
      </Row>
    );
  }

  return (
    <Row justify="center" style={{ marginTop: 40 }}>
      <Col>
        <Card
          title={<Title level={3}>{dish.title}</Title>}
          style={{ width: 600 }}
        >
          <Paragraph>{dish.description}</Paragraph>
          <Text strong>Price: ${dish.price}</Text>
        </Card>
      </Col>
    </Row>
  );
}
