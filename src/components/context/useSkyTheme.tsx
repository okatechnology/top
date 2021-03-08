import { createContext, useContext, useEffect, useState, FC } from 'react';

export type SkyThemeName = 'bluesky' | 'sunset' | 'night';
interface SkyThemeProps {
  current: SkyThemeName | undefined;
}

export const useSkyTheme = () => useContext(useSkyTheme.context);
useSkyTheme.context = createContext<SkyThemeProps>(undefined as any);

export const SkyThemeProvider: FC = ({ children }) => {
  const [skyThemeName, setSkyThemeName] = useState<SkyThemeName>();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const skyThemeSetter = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      if (hours >= 18 || hours < 5 || (hours === 5 && minutes < 30)) {
        setSkyThemeName('night');
      } else if (
        (hours === 5 && minutes >= 30) ||
        (hours === 17 && minutes >= 30)
      ) {
        setSkyThemeName('sunset');
      } else {
        setSkyThemeName('bluesky');
      }
      timer = setTimeout(() => {
        skyThemeSetter();
      }, 1000);
    };
    skyThemeSetter();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <useSkyTheme.context.Provider value={{ current: skyThemeName }}>
      {children}
    </useSkyTheme.context.Provider>
  );
};
