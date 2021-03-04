import { ReactNode, VFC } from 'react';

interface WholeGridLayoutProps {
  mainVisual: ReactNode;
  contents: ReactNode;
}
export const WholeGridLayout: VFC<WholeGridLayoutProps> = (props) => {
  return <WholeGridLayoutPresentational {...props} />;
};

interface WholeGridLayoutPresentationalProps extends WholeGridLayoutProps {}
const WholeGridLayoutPresentational: VFC<WholeGridLayoutPresentationalProps> = ({
  mainVisual,
  contents,
}) => (
  <div className="pc:grid grid-cols-2">
    <div className="pc:h-screen pc:grid">
      <div className="pc:self-center">{mainVisual}</div>
    </div>
    <div>{contents}</div>
  </div>
);
