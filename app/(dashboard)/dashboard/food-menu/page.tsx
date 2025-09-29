"use client";

import { useEffect, useState } from "react";
import { Row, Col, Card } from "antd";
import { useRouter } from "next/navigation";

interface Dish {
  id: number;
  title: string;
  description: string;
  price: number;
}

export default function FoodMenu() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/dishes.json")
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, []);

  const handleCardClick = (dish: Dish) => {
    // You can navigate, open modal, or console log
    console.log("Clicked:", dish);
    router.push(`/dashboard/food-menu/${dish.id}`);
  };

  return (
    <Row gutter={[16, 16]} style={{ marginTop: 50,}} >
      {dishes.map((dish, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <Card
            title={dish.title}
            hoverable
            onClick={() => handleCardClick(dish)}
          >
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
