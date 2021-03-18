import { ToggleThemeButton } from '@molecules/ToggleThemeButton';
import { VFC } from 'react';

interface ButtonGroupAtPageTopProps {}
export const ButtonGroupAtPageTop: VFC<ButtonGroupAtPageTopProps> = (props) => {
  return <ButtonGroupAtPageTopPresentational {...props} />;
};

interface ButtonGroupAtPageTopPresentationalProps
  extends ButtonGroupAtPageTopProps {}
const ButtonGroupAtPageTopPresentational: VFC<ButtonGroupAtPageTopPresentationalProps> = () => (
  <div className="px-8 w-full">
    <ToggleThemeButton />
  </div>
);
