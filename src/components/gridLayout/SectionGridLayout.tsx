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
  <div className="px-10 py-12">
    <h2 className="text-2xl">{title}</h2>
    <div className="mt-4">{contents}</div>
  </div>
);
