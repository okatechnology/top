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
  <div className="grid gap-4 grid-cols-2 pc:-mt-24 pc:p-8 pc:pt-0 w-full">
    <ToggleThemeButton />
    <ToggleLanguageButton />
  </div>
);
