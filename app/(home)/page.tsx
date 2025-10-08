
import BannerCarousel from "@/components/BannerCarousel";
import { Title } from "@/components/Typography";

import {
  Button,
  Card,
  Col,
  Image,
  Row
} from "antd";

export default function Home() {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);



  const foodItems = [
    {
      title: "Pizza",
      description: "Delicious cheesy pizza",
      img: "https://i.ibb.co.com/6JpZGdVK/alex-munsell-au-Ib-TAc-SH6-E-unsplash.jpg",
    },
    {
      title: "Burger",
      description: "Juicy beef burger",
      img: "https://i.ibb.co.com/nMkL3WGj/victoria-shes-UC0-HZd-Uit-WY-unsplash.jpg",
    },
    {
      title: "Sushi",
      description: "Fresh sushi platter",
      img: "https://i.ibb.co.com/jP6T0ZC0/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg",
    },
    {
      title: "Pasta",
      description: "Italian pasta with sauce",
      img: "https://i.ibb.co.com/27CdJ0Gz/lily-banse-YHSwy6uqvk-unsplash.jpg",
    },
  ];

  // if (!isMounted) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         minHeight: "100vh",
  //       }}
  //     >
  //       <Spin size="large" />
  //     </div>
  //   );
  // }

  return (
    <div>
      {/* Carousel */}
      <BannerCarousel/>

      {/* Row of Cards */}
      <Row gutter={16}>
        <Col span={24}>
          <Title level={3} style={{ margin: "2rem 0", textAlign: "center" }}>
            Most Popular
          </Title>
          <Row
            gutter={[16, 16]}
            style={{ marginTop: "2rem", padding: "0 1rem" }}
          >
            {foodItems.map((food, index) => (
              <Col xs={24} sm={12} md={12} lg={6} key={index}>
                <Card
                  hoverable
                  cover={
                    <Image
                      alt={food.title}
                      src={food.img}
                      draggable={false}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                >
                  <Button
                    type="primary"
                    style={{ marginTop: "1rem", width: "100%" }}
                  >
                    Order Now
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
