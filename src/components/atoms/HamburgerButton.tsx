import { useCallback, useRef, VFC } from 'react';

export interface HamburgerButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}
export const HamburgerButton: VFC<HamburgerButtonProps> = (props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleBlur = useCallback(() => {
    buttonRef.current?.blur();
  }, []);

  return (
    <HamburgerButtonPresentational
      {...props}
      buttonRef={buttonRef}
      handleBlur={handleBlur}
    />
  );
};

interface HamburgerButtonPresentationalProps extends HamburgerButtonProps {
  buttonRef: React.RefObject<HTMLButtonElement>;
  handleBlur: () => void;
}
const HamburgerButtonPresentational: VFC<HamburgerButtonPresentationalProps> = ({
  onClick,
  isOpen,
  buttonRef,
  handleBlur,
}) => (
  <button
    ref={buttonRef}
    type="button"
    className="p-2 grid gap-2"
    onClick={onClick}
    onMouseUp={handleBlur}
    onMouseOut={handleBlur}
    onBlur={handleBlur}
  >
    {Array.from({ length: 3 }, (_, i) => (
      <span
        className={`block ${(() => {
          if (isOpen) return 'transform';
          return '';
        })()} ${(() => {
          if (!isOpen) return '';
          if (i === 0) return 'rotate-45 translate-y-2.5';
          if (i === 1) return 'opacity-0';
          return '-rotate-45 -translate-y-2.5';
        })()} transition-all duration-200`}
        key={i}
      >
        <span className="block w-8 h-0.5 bg-gray-700 dark:bg-gray-300 transition-background-color duration-700 ease-linear"></span>
      </span>
    ))}
  </button>
);
