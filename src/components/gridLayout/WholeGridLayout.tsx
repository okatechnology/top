import { ReactNode, VFC } from 'react';

interface WholeGridLayoutProps {
  mainVisual: ReactNode;
  contents: ReactNode;
  contentsVisiable: boolean;
  visiableTransitionEnd: () => void;
}
export const WholeGridLayout: VFC<WholeGridLayoutProps> = (props) => {
  return <WholeGridLayoutPresentational {...props} />;
};

interface WholeGridLayoutPresentationalProps extends WholeGridLayoutProps {}
const WholeGridLayoutPresentational: VFC<WholeGridLayoutPresentationalProps> = ({
  mainVisual,
  contents,
  contentsVisiable,
  visiableTransitionEnd,
}) => (
  <div className="pc:grid grid-cols-2">
    <div>
      <div
        className={`fixed z-50 top-0 left-0 bottom-0 ${
          contentsVisiable ? 'right-1/2' : 'right-0'
        } transition-directions duration-700`}
        onTransitionEnd={visiableTransitionEnd}
      >
        {mainVisual}
      </div>
    </div>
    <div>{contents}</div>
  </div>
);
