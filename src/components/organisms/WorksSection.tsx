import { WorksItem } from '@molecules/WorksItem';
import { useRouter } from 'next/dist/client/router';
import { VFC } from 'react';
import { intoTypedLocale } from 'src/utils/utilFunctions';
import { useWorkModal } from '../context/useWorkModal';
import { SectionLayout } from '../molecules/SectionLayout';
import { works } from './worksSection.core';

interface WorksSectionProps {}

export const WorksSection: VFC<WorksSectionProps> = (props) => {
  const currLocale = intoTypedLocale(useRouter().locale);
  const { workModal, setWorkModal } = useWorkModal();

  return (
    <WorksSectionPresentational
      {...props}
      currLocale={currLocale}
      workModal={workModal}
      setWorkModal={setWorkModal}
    />
  );
};

interface WorksSectionPresentationalProps extends WorksSectionProps {
  currLocale: LocaleName;
  workModal: number | undefined;
  setWorkModal: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const WorksSectionPresentational: VFC<WorksSectionPresentationalProps> = ({
  workModal,
  setWorkModal,
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
                focusable={workModal == undefined}
                onClick={() => setWorkModal(i)}
              />
            </li>
          ))}
        </ul>
      }
    />
  </div>
);
