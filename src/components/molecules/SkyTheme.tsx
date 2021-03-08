import { ReactNode, VFC } from 'react';
import { SkyThemeName, useSkyTheme } from '../context/useSkyTheme';

interface SkyThemeProps {
  contents: ReactNode;
}
export const SkyTheme: VFC<SkyThemeProps> = (props) => {
  const skyThemeName = useSkyTheme().current;
  return <SkyThemePresentational {...props} skyThemeName={skyThemeName} />;
};

interface SkyThemePresentationalProps extends SkyThemeProps {
  skyThemeName: SkyThemeName | undefined;
}
const SkyThemePresentational: VFC<SkyThemePresentationalProps> = ({
  contents,
  skyThemeName,
}) => (
  <div className="relative text-white transition-bg-image">
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-0"></div>
    <div
      className={`absolute top-0 right-0 bottom-0 left-0 bg-bluesky transition-opacity duration-700 ease-linear ${
        skyThemeName === 'bluesky' ? 'opacity-100' : 'opacity-0'
      } z-10`}
    ></div>
    <div
      className={`absolute top-0 right-0 bottom-0 left-0 bg-sunset transition-opacity duration-700 ease-linear ${
        skyThemeName === 'sunset' ? 'opacity-100' : 'opacity-0'
      } z-10`}
    ></div>
    <div
      className={`absolute top-0 right-0 bottom-0 left-0 bg-night transition-opacity duration-700 ease-linear ${
        skyThemeName === 'night' ? 'opacity-100' : 'opacity-0'
      } z-10`}
    ></div>
    <div className="relative z-10">{contents}</div>
  </div>
);
