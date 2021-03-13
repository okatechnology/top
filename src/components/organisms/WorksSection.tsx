import { WorksItem } from '@molecules/WorksItem';
import { useRouter } from 'next/dist/client/router';
import { VFC } from 'react';
import { intoTypedLocale } from 'src/utils/utilFunctions';
import { SectionGridLayout } from '../gridLayout/SectionGridLayout';
import { works } from './worksSection.core';

interface WorksSectionProps {
  showingWorkDispatch: React.Dispatch<React.SetStateAction<number | undefined>>;
}
export const WorksSection: VFC<WorksSectionProps> = (props) => {
  const currLocale = intoTypedLocale(useRouter().locale);
  return <WorksSectionPresentational {...props} currLocale={currLocale} />;
};

interface WorksSectionPresentationalProps extends WorksSectionProps {
  currLocale: LocaleName;
}
const WorksSectionPresentational: VFC<WorksSectionPresentationalProps> = ({
  showingWorkDispatch,
  currLocale,
}) => (
  <div>
    <SectionGridLayout
      title="WORKS"
      contents={
        <ul className="grid gap-x-8 gap-y-12 wpc:grid-cols-2">
          {works.map((work, i) => (
            <li key={work.title[currLocale]}>
              <WorksItem
                image={work.image}
                title={work.title[currLocale]}
                onClick={() => showingWorkDispatch(i)}
              />
            </li>
          ))}
        </ul>
      }
    />
  </div>
);
