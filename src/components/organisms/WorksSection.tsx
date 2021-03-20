import { WorksItem } from '@molecules/WorksItem';
import { useRouter } from 'next/dist/client/router';
import { VFC } from 'react';
import { intoTypedLocale } from 'src/utils/utilFunctions';
import { SectionLayout } from '../molecules/SectionLayout';
import { works } from './worksSection.core';

interface WorksSectionProps {
  showingWork: number | undefined;
  setShowingWork: React.Dispatch<React.SetStateAction<number | undefined>>;
}
export const WorksSection: VFC<WorksSectionProps> = (props) => {
  const currLocale = intoTypedLocale(useRouter().locale);
  return <WorksSectionPresentational {...props} currLocale={currLocale} />;
};

interface WorksSectionPresentationalProps extends WorksSectionProps {
  currLocale: LocaleName;
}
const WorksSectionPresentational: VFC<WorksSectionPresentationalProps> = ({
  showingWork,
  setShowingWork,
  currLocale,
}) => (
  <div>
    <SectionLayout
      title="WORKS"
      hasPaddingOnSmartphone={true}
      contents={
        <ul className="grid tb:justify-evenly gap-x-4 pc:gap-x-8 gap-y-8 tb:grid-cols-2 pc:grid-cols-1 wpc:grid-cols-2">
          {works.map((work, i) => (
            <li key={work.title[currLocale]}>
              <WorksItem
                image={work.image}
                title={work.title[currLocale]}
                focusable={showingWork == undefined}
                onClick={() => setShowingWork(i)}
              />
            </li>
          ))}
        </ul>
      }
    />
  </div>
);
