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
    className="overflow-hidden w-full rounded-2xl pc:rounded-b-2xl pc:rounded-t-none pc:hover:shadow-md pc:dark:hover:shadow-md-white focus:outline-none focus:shadow-md focus:ring-2 ring-blue-500 transform pc:hover:translate-y-24 pc:focus:translate-y-24 transition-transform duration-200"
    ref={buttonRef}
    type="button"
    onClick={onClick}
    onMouseUp={handleBlur}
    onMouseOut={handleBlur}
    onBlur={handleBlur}
  >
    <div className="bg-white dark:bg-gray-900 transition-background-color duration-700 ease-linear">
      <div className="flex items-center justify-center w-full h-32 text-2xl tracking-wide">
        {contents}
      </div>
      <div className="hidden pc:flex items-center justify-center h-8">
        <span className="block w-3/4 h-1 rounded-full bg-gray-300 dark:bg-gray-600 transition-background-color duration-700 ease-linear"></span>
      </div>
    </div>
  </button>
);
