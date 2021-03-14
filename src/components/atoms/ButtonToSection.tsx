import { useCallback, useRef, VFC } from 'react';

export interface ButtonToSectionProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  sectionName: string;
}
export const ButtonToSection: VFC<ButtonToSectionProps> = (props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleBlur = useCallback(() => {
    buttonRef.current?.blur();
  }, []);

  return (
    <ButtonToSectionPresentational
      {...props}
      buttonRef={buttonRef}
      handleBlur={handleBlur}
    />
  );
};

interface ButtonToSectionPresentationalProps extends ButtonToSectionProps {
  buttonRef: React.RefObject<HTMLButtonElement>;
  handleBlur: () => void;
}
const ButtonToSectionPresentational: VFC<ButtonToSectionPresentationalProps> = ({
  onClick,
  sectionName,
  buttonRef,
  handleBlur,
}) => (
  <button
    ref={buttonRef}
    type="button"
    className="text-2xl tracking-wide w-max justify-self-center px-2 font-mono"
    onClick={onClick}
    onMouseUp={handleBlur}
    onMouseOut={handleBlur}
    onBlur={handleBlur}
  >
    {sectionName}
  </button>
);
