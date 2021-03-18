import { useCallback, useRef, VFC } from 'react';

export interface ButtonAtPageTopProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  contents: React.ReactNode;
}
export const ButtonAtPageTop: VFC<ButtonAtPageTopProps> = (props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleBlur = useCallback(() => {
    buttonRef.current?.blur();
  }, []);

  return (
    <ButtonAtPageTopPresentational
      {...props}
      buttonRef={buttonRef}
      handleBlur={handleBlur}
    />
  );
};

interface ButtonAtPageTopPresentationalProps extends ButtonAtPageTopProps {
  buttonRef: React.RefObject<HTMLButtonElement>;
  handleBlur: () => void;
}
const ButtonAtPageTopPresentational: VFC<ButtonAtPageTopPresentationalProps> = ({
  onClick,
  contents,
  buttonRef,
  handleBlur,
}) => (
  <button
    ref={buttonRef}
    type="button"
    className="block w-full h-16 rounded-b-2xl text-2xl tracking-wide bg-white dark:bg-gray-900 transition-background-color duration-700 ease-linear hover:shadow-md dark:hover:shadow-md-white focus:outline-none focus:shadow-md focus:ring-2 ring-blue-500"
    onClick={onClick}
    onMouseUp={handleBlur}
    onMouseOut={handleBlur}
    onBlur={handleBlur}
  >
    {contents}
  </button>
);
