import { VFC } from 'react';

interface SectionLayoutProps {
  title: string;
  contents: React.ReactNode;
}
export const SectionLayout: VFC<SectionLayoutProps> = (props) => {
  return <SectionLayoutPresentational {...props} />;
};

interface SectionLayoutPresentationalProps extends SectionLayoutProps {}
const SectionLayoutPresentational: VFC<SectionLayoutPresentationalProps> = ({
  title,
  contents,
}) => (
  <div className="px-8 pt-16 pb-20 min-h-section rounded-2xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 grid items-center">
    <div>
      <h2 className="text-4xl w-max m-auto pb-2 px-4 border-b-2 border-gray-700 dark:border-gray-300 font-mono">
        {title}
      </h2>
      <div className="mt-16">{contents}</div>
    </div>
  </div>
);
