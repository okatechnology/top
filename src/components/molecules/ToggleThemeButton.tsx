import { ButtonAtPageTop } from '@atoms/ButtonAtPageTop';
import { SlideSwitch } from '@atoms/SlideSwitch';
import { VFC } from 'react';
import { useTheme } from '../context/useTheme';

interface ToggleThemeButtonProps {}
export const ToggleThemeButton: VFC<ToggleThemeButtonProps> = (props) => {
  const { toggleTheme, dark } = useTheme();

  return (
    <ToggleThemeButtonPresentational
      {...props}
      handleClickButton={toggleTheme}
      isDarkTheme={dark}
    />
  );
};

interface ToggleThemeButtonPresentationalProps extends ToggleThemeButtonProps {
  handleClickButton: () => void;
  isDarkTheme: boolean;
}
const ToggleThemeButtonPresentational: VFC<ToggleThemeButtonPresentationalProps> = ({
  handleClickButton,
  isDarkTheme,
}) => (
  <ButtonAtPageTop
    contents={
      <div className="grid grid-cols-3-max items-center justify-center gap-2">
        <span className="flex items-center justify-center w-8 transition-colors duration-700 ease-linear">
          ☼
        </span>
        <SlideSwitch on={isDarkTheme} />
        <span className="flex items-center justify-center w-8 transition-colors duration-700 ease-linear">
          ☽
        </span>
      </div>
    }
    onClick={handleClickButton}
  />
);
