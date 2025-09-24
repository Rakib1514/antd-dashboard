import { Button, Flex } from "antd";

export default function Home() {
  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Button type="primary" href="/dashboard">
        Dashboard
      </Button>
    </Flex>
  );
}
