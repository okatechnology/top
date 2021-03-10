import { VFC } from 'react';

interface SectionGridLayoutProps {
  title: string;
  contents: React.ReactNode;
}
export const SectionGridLayout: VFC<SectionGridLayoutProps> = (props) => {
  return <SectionGridLayoutPresentational {...props} />;
};

interface SectionGridLayoutPresentationalProps extends SectionGridLayoutProps {}
const SectionGridLayoutPresentational: VFC<SectionGridLayoutPresentationalProps> = ({
  title,
  contents,
}) => (
  <div className="p-8 rounded-lg bg-white">
    <h2 className="text-4xl w-max m-auto pb-2 text-gray-800 border-b-2 border-gray-700">
      {title}
    </h2>
    <div className="text-gray-800">{contents}</div>
  </div>
);
