import { useState } from "react";
import { Helmet } from "react-helmet";

import "./index.css";
import { Header } from "./Header";
import { Theme } from "./ThemeSelector";
import { Hero } from "./Hero";

export const App: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<Theme>("dark");

  return (
    <div className="App">
      <Helmet>
        <title>sauntimo.org</title>
        <html data-theme={activeTheme} />
      </Helmet>
      <Header
        activeRoute=""
        activeTheme={activeTheme}
        onChangeTheme={setActiveTheme}
      />
      <Hero />
    </div>
  );
};
