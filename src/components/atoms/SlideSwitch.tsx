import { VFC } from 'react';

export interface SlideSwitchProps {
  on: boolean;
}
export const SlideSwitch: VFC<SlideSwitchProps> = (props) => {
  return <SlideSwitchPresentational {...props} />;
};

interface SlideSwitchPresentationalProps extends SlideSwitchProps {}
const SlideSwitchPresentational: VFC<SlideSwitchPresentationalProps> = ({
  on,
}) => (
  <div className="flex items-center justify-center w-16 h-8 border-2 border-gray-800 dark:border-gray-100 transition-border-color duration-700 ease-linear rounded-full">
    <div
      className={`transform ${
        on ? 'translate-x-4' : '-translate-x-4'
      } transition-transform duration-100`}
    >
      <div className="rounded-full w-6 h-6 bg-gray-800 dark:bg-gray-100 transition-colors duration-700 ease-linear"></div>
    </div>
  </div>
);
