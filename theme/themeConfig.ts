import { theme, type ThemeConfig } from "antd";

const themeAntd: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    fontSize: 16,
    colorPrimary: "#5A6ACF",
    colorBorderPrimary: "#C8CBD9",

    // Expand Custom token
    colorBgPrimary50: "#F1F2F7",
    colorBlack: "#000000",
    colorGray: "#808080",
  },
  components: {
    Button: {
      borderRadius: 5,
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 20,
    },
    Layout: {
      bodyBg: "#FFF",
      siderBg: "#F1F2F7",
      triggerBg: "#97A3EE",
      fontFamily: "Poppins, sans-serif",
    },
  },
};


export default themeAntd;

