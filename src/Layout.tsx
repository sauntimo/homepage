import { PropsWithChildren } from "react";

import { Header, HeaderProps } from "./Header";

type LayoutProps = HeaderProps;
export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  activeRoute,
  activeTheme,
  onChangeTheme,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        activeRoute={activeRoute}
        activeTheme={activeTheme}
        onChangeTheme={onChangeTheme}
      />
      <div className="flex flex-grow">{children}</div>
    </div>
  );
};
