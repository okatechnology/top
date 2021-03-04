import { VFC } from 'react';

export interface ButtonToSectionProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  sectionName: string;
}
export const ButtonToSection: VFC<ButtonToSectionProps> = (props) => {
  return <ButtonToSectionPresentational {...props} />;
};

interface ButtonToSectionPresentationalProps extends ButtonToSectionProps {}
const ButtonToSectionPresentational: VFC<ButtonToSectionPresentationalProps> = ({
  onClick,
  sectionName,
}) => (
  <button
    type="button"
    className="text-2xl tracking-wide w-max justify-self-center px-2 outline-hidden"
    onClick={onClick}
  >
    {sectionName}
  </button>
);
