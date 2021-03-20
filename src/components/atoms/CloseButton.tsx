import { useCallback, useRef, VFC } from 'react';

export interface CloseButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const CloseButton: VFC<CloseButtonProps> = (props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleBlur = useCallback(() => {
    buttonRef.current?.blur();
  }, []);

  return (
    <CloseButtonPresentational
      {...props}
      buttonRef={buttonRef}
      handleBlur={handleBlur}
    />
  );
};

interface CloseButtonPresentationalProps extends CloseButtonProps {
  buttonRef: React.RefObject<HTMLButtonElement>;
  handleBlur: () => void;
}
const CloseButtonPresentational: VFC<CloseButtonPresentationalProps> = ({
  onClick,
  buttonRef,
  handleBlur,
}) => (
  <button
    ref={buttonRef}
    type="button"
    className="group flex justify-center items-center w-8 h-8 bg-red-300 dark:bg-red-700 rounded-full text-3xl focus:ring-2 ring-blue-500 focus:outline-none transform hover:scale-110 focus:scale-110 transition-transform"
    onClick={onClick}
    onMouseUp={handleBlur}
    onMouseOut={handleBlur}
    onBlur={handleBlur}
  >
    <span className="block absolute bg-white w-4 h-0.5 transform rotate-45"></span>
    <span className="block absolute bg-white w-4 h-0.5 transform -rotate-45"></span>
  </button>
);
