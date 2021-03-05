import { ReactNode, useEffect, useState, VFC } from 'react';
import { SkyThemeName } from './skyTheme.core';

interface SkyThemeProps {
  contents: ReactNode;
}
export const SkyTheme: VFC<SkyThemeProps> = (props) => {
  const [skyThemeName, setSkyThemeName] = useState<SkyThemeName>('night');

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

  return <SkyThemePresentational {...props} skyThemeName={skyThemeName} />;
};

interface SkyThemePresentationalProps extends SkyThemeProps {
  skyThemeName: SkyThemeName;
}
const SkyThemePresentational: VFC<SkyThemePresentationalProps> = ({
  contents,
  skyThemeName,
}) => (
  <div className="relative text-white transition-bg-image">
    <div
      className={`absolute top-0 right-0 bottom-0 left-0 bg-bluesky transition-opacity duration-1000 ease-linear opacity-${
        skyThemeName === 'bluesky' ? 100 : 0
      }`}
    ></div>
    <div
      className={`absolute top-0 right-0 bottom-0 left-0 bg-sunset transition-opacity duration-1000 ease-linear opacity-${
        skyThemeName === 'sunset' ? 100 : 0
      }`}
    ></div>
    <div
      className={`absolute top-0 right-0 bottom-0 left-0 bg-night transition-opacity duration-1000 ease-linear opacity-${
        skyThemeName === 'night' ? 100 : 0
      }`}
    ></div>
    <div className="relative z-10">{contents}</div>
  </div>
);
