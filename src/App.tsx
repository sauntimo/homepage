import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import "./index.css";
import { Theme } from "./ThemeSelector";
import { Hero } from "./Hero";
import { Layout } from "./Layout";
import { useLocalStorage } from "react-use";

export const App: React.FC = () => {
  const [activeTheme, setActiveTheme] = useLocalStorage<Theme>("theme", "dark");

  return (
    <div className="App">
      <Helmet>
        <title>sauntimo.org</title>
        <html data-theme={activeTheme} />
      </Helmet>
      <Layout
        activeRoute=""
        activeTheme={activeTheme ?? "dark"}
        onChangeTheme={setActiveTheme}
      >
        <Hero />
      </Layout>
    </div>
  );
};
