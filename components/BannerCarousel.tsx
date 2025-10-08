import { Carousel, Image } from "antd";

export default function BannerCarousel() {
  const carouselImages: string[] = [
    "https://i.ibb.co.com/6R2vG8RX/36291915-8406236-1.jpg",
    "https://i.ibb.co.com/Txv4WtmB/20030255-6220339.jpg",
    "https://i.ibb.co.com/6R2vG8RX/36291915-8406236-1.jpg",
    "https://i.ibb.co.com/Txv4WtmB/20030255-6220339.jpg",
  ];

  return (
    <Carousel autoplay>
      {carouselImages.map((src, index) => (
        <div key={index}>
          <Image
            src={src}
            preview={false}
            width="100%"
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              maxHeight: "60vh",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}
