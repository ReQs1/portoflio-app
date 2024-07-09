import { createContext, useContext } from "react";
import useTheme from "../hooks/useTheme.ts";

type DarkModeContextProviderProps = {
  children: React.ReactNode;
};

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export default function DarkModeProvider({
  children,
}: DarkModeContextProviderProps) {
  const [isDarkMode, setIsDarkMode] = useTheme(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark: boolean) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined) {
    throw new Error("UseTheme must be used within a DarkModeContextProvider");
  }

  return context;
}
