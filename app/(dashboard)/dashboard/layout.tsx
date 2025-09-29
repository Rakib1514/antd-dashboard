import { Layout } from "antd";
import React from "react";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <Layout style={{maxWidth: "1240px", margin: "0 auto", width: "100%"}}>
      {children}
    </Layout>
  )
}