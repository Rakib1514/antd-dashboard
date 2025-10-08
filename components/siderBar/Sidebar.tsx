
import SidebarMenu from "@/components/siderBar/SidebarMenu";
import { Divider, Layout, Space, theme } from "antd";
// import { useState } from "react";
const { Sider } = Layout;
const { useToken } = theme;

// const {Text} = Typography;

export default function Sidebar() {
  // const [isSiderCollapsed, setIsSiderCollapsed] = useState(false);
  // const [isMounted, setIsMounted] = useState(false);
  const { token } = useToken();

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

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
    <Sider
      width={240}
      style={{ minHeight: "100vh" }}
      // collapsed={isSiderCollapsed}
      // onCollapse={(value) => setIsSiderCollapsed(value)}
      collapsible
    >
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

        {/* {!isSiderCollapsed && (
          <Text
            strong
            style={{
              fontSize: "11px",
              color: token.colorPrimary,
              transition: "all 0.3s ease-in-out",
            }}
          >
            GOODFOOD
          </Text>
        )} */}
      </Space>
      <Divider style={{ margin: 0 }} />

      <SidebarMenu />
    </Sider>
  );
}
