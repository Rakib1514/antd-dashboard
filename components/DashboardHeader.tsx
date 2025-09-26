import { Divider, Space, theme, Typography } from "antd";

export default function DashboardHeader() {
  const { token } = theme.useToken();

  return (
    <>
      <Space
        align="center"
        style={{
          height: 52,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            backgroundColor: token.colorPrimary,
            fontWeight: "bold",
            padding: "4px 6px",
            borderRadius: "50%",
            color: "white",
          }}
        >
          G
        </span>

        <Typography.Text
          strong
          style={{
            fontSize: "11px",
            color: token.colorPrimary,
            transition: "all 0.3s ease-in-out",
          }}
        >
          GOODFOOD
        </Typography.Text>
      </Space>
      <Divider style={{ margin: 0 }} />
    </>
  );
}
