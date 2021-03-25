import { useCallback, useRef, VFC } from 'react';

export interface ButtonToSectionProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  sectionName: string;
  isAtModal: boolean;
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
  isAtModal,
  buttonRef,
  handleBlur,
}) => (
  <button
    ref={buttonRef}
    type="button"
    className="group flex items-center justify-start relative overflow-hidden h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 dark:focus:ring-offset-blue-900 ringo text-2xl tracking-wide"
    onClick={onClick}
    onMouseUp={handleBlur}
    onMouseOut={handleBlur}
    onBlur={handleBlur}
  >
    <div className="px-4 transition-colors duration-700 ease-linear">
      {sectionName}
    </div>
    <div
      className={`flex items-center justify-start absolute w-0 group-hover:w-full group-focus:w-full h-full overflow-hidden ${
        isAtModal
          ? 'text-white dark:text-gray-900 bg-gray-900 dark:bg-gray-100'
          : 'text-blue-600 dark:text-blue-900 bg-white'
      } transition-width duration-200`}
    >
      <div className="px-4" aria-hidden="true">
        {sectionName}
      </div>
    </div>
  </button>
);
