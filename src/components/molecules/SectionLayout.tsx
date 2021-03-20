import { VFC } from 'react';

interface SectionLayoutProps {
  title: string;
  contents: React.ReactNode;
  hasPaddingOnSmartphone: boolean;
}
export const SectionLayout: VFC<SectionLayoutProps> = (props) => {
  return <SectionLayoutPresentational {...props} />;
};

interface SectionLayoutPresentationalProps extends SectionLayoutProps {}
const SectionLayoutPresentational: VFC<SectionLayoutPresentationalProps> = ({
  title,
  contents,
  hasPaddingOnSmartphone,
}) => (
  <div
    className={`${
      hasPaddingOnSmartphone ? 'px-4' : ''
    } pc:px-8 pt-12 pc:pt-16 pb-14 pc:pb-20 min-h-section rounded-2xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-700 ease-linear grid items-center`}
  >
    <div>
      <h2 className="text-4xl w-max m-auto pb-2 px-4 border-b-2 border-gray-700 dark:border-gray-300 transition-border-color duration-700 ease-linear">
        {title}
      </h2>
      <div className="mt-16">{contents}</div>
    </div>
  </div>
);
