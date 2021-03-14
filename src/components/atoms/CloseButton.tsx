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
    className="group w-8 h-8 bg-red-300 dark:bg-red-700 rounded-full text-3xl flex justify-center items-center focus:ring-2 ring-blue-500 focus:outline-none transform hover:scale-110 focus:scale-110 transition-transform font-mono"
    onClick={onClick}
    onMouseUp={handleBlur}
    onMouseOut={handleBlur}
    onBlur={handleBlur}
  >
    <span className="h-0 w-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200">
      ×
    </span>
  </button>
);
