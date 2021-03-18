import { ToggleThemeButton } from '@molecules/ToggleThemeButton';
import { VFC } from 'react';
import { ToggleLanguageButton } from '../molecules/ToggleLanguageButton';

interface ButtonGroupAtPageTopProps {}
export const ButtonGroupAtPageTop: VFC<ButtonGroupAtPageTopProps> = (props) => {
  return <ButtonGroupAtPageTopPresentational {...props} />;
};

interface ButtonGroupAtPageTopPresentationalProps
  extends ButtonGroupAtPageTopProps {}
const ButtonGroupAtPageTopPresentational: VFC<ButtonGroupAtPageTopPresentationalProps> = () => (
  <div className="grid gap-4 grid-cols-2 -mt-24 px-8 pb-8 w-full">
    <div className="transform hover:translate-y-24 focus:translate-y-24 transition-transform duration-200">
      <ToggleThemeButton />
    </div>
    <div className="transform hover:translate-y-24 focus:translate-y-24 transition-transform duration-200">
      <ToggleLanguageButton />
    </div>
  </div>
);
