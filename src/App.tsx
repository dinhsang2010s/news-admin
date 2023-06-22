import { useContext, useState } from "react";
import "./App.less";
import { ThemeContext, ThemeContextProvider } from "./themes";
import { Main } from "./layouts";
import ConfigProvider from "antd/es/config-provider";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Comfortaa, cursive",
          colorPrimary: "#009879",
        },
      }}
    >
      <ThemeContextProvider>
        <div className="App">
          <Main />
        </div>
      </ThemeContextProvider>
    </ConfigProvider>
  );
}

export default App;
