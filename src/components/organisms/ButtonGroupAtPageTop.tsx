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
  <div className="grid gap-4 grid-cols-2 pc:-mt-24 p-4 pt-8 pc:pt-0 pc:px-8 pc:pb-8 w-full">
    <div className="transform pc:hover:translate-y-24 focus:translate-y-24 transition-transform duration-200">
      <ToggleThemeButton />
    </div>
    <div className="transform pc:hover:translate-y-24 focus:translate-y-24 transition-transform duration-200">
      <ToggleLanguageButton />
    </div>
  </div>
);
