import { ConfigProvider } from "antd";
import { CustomizeRenderEmpty } from "../components/emptyIndicator";

const AntdConfigProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      renderEmpty={CustomizeRenderEmpty}
      theme={{
        components: {
          Menu: {
            itemSelectedBg: "#F8F8F8",
            itemSelectedColor: "#111827",
            itemColor: "#111827",
            itemMarginInline: 8,
          },
          Form: {
            verticalLabelPadding: "0px",
            itemMarginBottom: 12,
          },
          Table: {
            headerBg: "#FAFAFA",
            headerColor: "#718096",
            fontSize: 13,
          },
          Empty: {},
          Button: {
            fontWeight: 500,
            contentFontSizeLG: 14,
            defaultColor: "#111827",
            defaultBorderColor: "#4ca696",
            colorPrimary: "#4ca696",
            colorPrimaryHover: "#3b907e",
            colorPrimaryActive: "#367d6d",
          },
          Tabs: {
            itemActiveColor: "#4ca696", // Active tab color
            itemHoverColor: "#367d6d", // Hover color
            inkBarColor: "#367d6d", // Underline color
          },
          Select: {
            colorText: "#111827",
            colorBorder: "#E9EAEC",
          },
          Collapse: {
            headerBg: "#FFF",
            contentBg: "FFF",
          },
          Switch: {
            colorPrimary: "#4ca696",
          },
          Radio: {
            colorPrimary: "#4ca696", // Changes selected radio color
            colorPrimaryHover: "#4ca696", // Changes hover color
          },
        },
        token: {
          colorPrimary: "#3636F0",
          colorSuccess: "#0CAF60",
          colorError: "#E03137",
          colorWarning: "#FACC15",
          borderRadius: 9,
          fontFamily: "Manrope",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdConfigProvider;
