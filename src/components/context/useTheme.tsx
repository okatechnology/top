import { createContext, useCallback, useContext, useState } from 'react';

interface ThemeContext {
  toggleTheme: () => void;
  dark: boolean;
}

export const useTheme = () => useContext(useTheme.context);
useTheme.context = createContext<ThemeContext>(undefined as any);

export const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(false);
  const toggleTheme = useCallback(() => setDark((curr) => !curr), []);

  return (
    <useTheme.context.Provider value={{ toggleTheme, dark }}>
      <div className={dark ? 'dark' : undefined}>{children}</div>
    </useTheme.context.Provider>
  );
};
