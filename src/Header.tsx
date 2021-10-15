import { Theme, ThemeSelector } from "./ThemeSelector";

export interface HeaderProps {
  activeRoute: string;
  activeTheme: Theme;
  onChangeTheme: (activeTheme: Theme) => void;
}

const pages = [
  { title: "Home", route: "" },
  { title: "Portfolio", route: "portfolio" },
  { title: "About", route: "about" },
  { title: "Contact", route: "contact" },
];

export const Header: React.FC<HeaderProps> = ({
  activeRoute,
  activeTheme,
  onChangeTheme,
}: HeaderProps) => {
  return (
    <nav className="navbar shadow-lg bg-neutral text-neutral-content">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">sauntimo.org</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          {pages.map((page) => (
            <a
              key={page.title}
              className={`btn ${
                page.route === activeRoute ? "btn-accent" : "btn-ghost"
              } btn-sm rounded-btn`}
              href={`/${page.route}`}
            >
              {page.title}
            </a>
          ))}
        </div>
      </div>
      <div className="mr-8">
        <ThemeSelector
          activeTheme={activeTheme}
          onChangeTheme={onChangeTheme}
        />
      </div>
    </nav>
  );
};
