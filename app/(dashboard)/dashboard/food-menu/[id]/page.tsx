"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, Row, Col, Typography, Spin } from "antd";

const { Title, Paragraph, Text } = Typography;

interface Dish {
  title: string;
  description: string;
  price: number;
}

export default function DishDetails() {
  const { id } = useParams();
  const [dish, setDish] = useState<Dish | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/dishes.json")
      .then((res) => res.json())
      .then((data: Dish[]) => {
        const selected = data[Number(id)];
        setDish(selected);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Row justify="center" style={{ marginTop: 50 }}>
        <Spin size="large" />
      </Row>
    );
  }

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
