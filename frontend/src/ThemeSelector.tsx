import React from "react";

const themeValues = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  // "synthwave",
  // "retro",
  "cyberpunk",
  "valentine",
  // "halloween",
  // "garden",
  // "forest",
  // "aqua",
  "lofi",
  "pastel",
  // "fantasy",
  "wireframe",
  // "black",
  // "luxury",
  "dracula",
] as const;

export type Theme = typeof themeValues[number];

interface ThemeSelectorProps {
  activeTheme: Theme;
  onChangeTheme: (activeTheme: Theme) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  activeTheme,
  onChangeTheme,
}) => {
  return (
    <div className="dropdown">
      <div tabIndex={0} className="m-1 btn">
        Change Theme
      </div>
      <div className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-44 rounded-b-box bg-base-200 text-base-content">
        <ul tabIndex={0} className="menu p-4 compact">
          {themeValues.map((theme) => (
            <li key={theme}>
              <a
                className="cursor-pointer"
                onClick={() => onChangeTheme(theme)}
              >
                {theme}
                {theme === activeTheme ? " ✅" : ""}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
