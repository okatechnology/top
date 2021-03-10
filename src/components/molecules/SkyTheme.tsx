import { ReactNode, VFC } from 'react';

interface SkyThemeProps {
  contents: ReactNode;
}
export const SkyTheme: VFC<SkyThemeProps> = (props) => {
  return <SkyThemePresentational {...props} />;
};

interface SkyThemePresentationalProps extends SkyThemeProps {}
const SkyThemePresentational: VFC<SkyThemePresentationalProps> = ({
  contents,
}) => (
  <div className="relative text-white transition-bg-image">
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-0"></div>
    <div className="opacity-100 dark:opacity-0 absolute top-0 right-0 bottom-0 left-0 bg-bluesky transition-opacity duration-700 ease-linear z-10"></div>
    <div className="opacity-0 dark:opacity-100 absolute top-0 right-0 bottom-0 left-0 bg-night transition-opacity duration-700 ease-linear z-10"></div>
    <div className="relative z-10">{contents}</div>
  </div>
);
