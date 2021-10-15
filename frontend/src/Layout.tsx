import React from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

import "./index.css";
import { Header } from "./Header";
import { Helmet } from "react-helmet";
import { useLocalStorage } from "react-use";
import { Theme } from "./ThemeSelector";

export const Layout: React.FC<RouteConfigComponentProps> = ({
  route = {},
  location,
}) => {
  const [activeTheme, setActiveTheme] = useLocalStorage<Theme>("theme", "dark");
  const { routes } = route;

  return (
    <>
      <Helmet>
        <title>sauntimo.org</title>
        <html data-theme={activeTheme} />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header
          activeRoute={location.pathname}
          activeTheme={activeTheme ?? "dark"}
          onChangeTheme={setActiveTheme}
        />
        {renderRoutes(routes)}
      </div>
    </>
  );
};
