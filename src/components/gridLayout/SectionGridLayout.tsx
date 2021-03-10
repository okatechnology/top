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
  <div className="p-8 pt-16 pb-20 rounded-2xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <h2 className="text-4xl w-max m-auto pb-2 px-4 border-b-2 border-gray-700 dark:border-gray-300">
      {title}
    </h2>
    <div className="mt-4">{contents}</div>
  </div>
);
