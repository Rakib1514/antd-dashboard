import {  Col, Row } from "antd";
import Card  from "@/components/Card";

interface Dish {
  id: number;
  title: string;
  description: string;
  price: number;
}

export default async function FoodMenu() {
  //need to change the fetch url to vercel link
  const res = await fetch("http://localhost:3000/api/dishes", {
    cache: "no-store", 
  });
  const dishes : Dish[] = await res.json();

  return (
    <Row gutter={[16, 16]} style={{ marginTop: 50 }}>
      {dishes.map((dish, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <Card title={dish.title} hoverable itemId={dish.id}>
            <p>{dish.description}</p>
            <p>
              <strong>Price:</strong> ${dish.price}
            </p>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
