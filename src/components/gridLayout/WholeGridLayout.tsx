import { ReactNode, VFC } from 'react';
import { useContentsVisible } from '../context/useContentsVisible';

interface WholeGridLayoutProps {
  mainVisual: ReactNode;
  contents: ReactNode;
}
export const WholeGridLayout: VFC<WholeGridLayoutProps> = (props) => {
  const { contentsVisible, handleVisibleTransitionEnd } = useContentsVisible();
  return (
    <WholeGridLayoutPresentational
      {...props}
      contentsVisible={contentsVisible}
      handleVisibleTransitionEnd={handleVisibleTransitionEnd}
    />
  );
};

interface WholeGridLayoutPresentationalProps extends WholeGridLayoutProps {
  contentsVisible: boolean;
  handleVisibleTransitionEnd: () => void;
}
const WholeGridLayoutPresentational: VFC<WholeGridLayoutPresentationalProps> = ({
  mainVisual,
  contents,
  contentsVisible,
  handleVisibleTransitionEnd,
}) => (
  <div className="pc:grid grid-cols-2">
    <div>
      <div
        className={`pc:fixed z-50 top-0 left-0 bottom-0 ${
          contentsVisible ? 'right-1/2' : 'right-0'
        } transition-directions duration-700`}
        onTransitionEnd={handleVisibleTransitionEnd}
      >
        {mainVisual}
      </div>
    </div>
    <div>{contents}</div>
  </div>
);
