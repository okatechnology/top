import { CloseButton } from '@atoms/CloseButton';
import { WorkDetailsDate } from '@molecules/WorkDetailsDate';
import { WorkDetailsLinks } from '@molecules/WorkDetailsLinks';
import { WorkDetailsTechnologyUsed } from '@molecules/WorkDetailsTechnologyUsed';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React, { useCallback, useMemo, VFC } from 'react';
import { intoTypedLocale } from 'src/utils/utilFunctions';
import { useWorkModal } from '../context/useWorkModal';
import { works, Work } from './worksSection.core';

interface WorkDetailsProps {}
export const WorkDetails: VFC<WorkDetailsProps> = (props) => {
  const { setWorkModal, workModal } = useWorkModal();

  const currLocale = intoTypedLocale(useRouter().locale);

  const closeWindow = useCallback(() => {
    setWorkModal(undefined);
  }, [setWorkModal]);

  const work = useMemo(() => {
    if (workModal == undefined) return;
    return works[workModal];
  }, [workModal]);

  if (work == undefined || workModal == undefined) {
    setWorkModal(undefined);
    return <></>;
  }

  return (
    <WorkDetailsPresentational
      {...props}
      closeWindow={closeWindow}
      work={work}
      currLocale={currLocale}
      workModal={workModal}
      setWorkModal={setWorkModal}
    />
  );
};

interface WorkDetailsPresentationalProps extends WorkDetailsProps {
  closeWindow: () => void;
  work: Work;
  currLocale: LocaleName;
  workModal: number;
  setWorkModal: React.Dispatch<React.SetStateAction<number | undefined>>;
}
const WorkDetailsPresentational: VFC<WorkDetailsPresentationalProps> = ({
  closeWindow,
  work,
  currLocale,
}) => (
  <div className="w-full pc:w-1/2 h-full fixed top-0 right-0 bottom-0 left-0 pc:left-1/2 z-40 bg-black bg-opacity-50 dark:bg-opacity-80 flex items-center">
    <div
      className="absolute top-0 right-0 bottom-0 left-0 focus:outline-none"
      onClick={closeWindow}
      onKeyDown={undefined}
      role="button"
      tabIndex={-1}
    ></div>
    <div className="relative z-10 mr-auto pc:ml-16 px-4 pc:px-0 pc:w-work-details-pc max-w-work-details-pc">
      <section className="w-full max-h-work-details-sp pc:max-h-work-details-pc bg-white dark:bg-gray-800 rounded-lg pc:px-4 overflow-scroll">
        <div className="sticky z-10 top-0 bg-inherit rounded-lg">
          <div className="ml-4 py-4">
            <CloseButton onClick={closeWindow} />
          </div>
          <span className="block h-0.5 w-full bg-gray-300 dark:bg-gray-600" />
        </div>
        <div className="h-full w-full p-4 pt-8 grid gap-20">
          <div className="rounded overflow-hidden">
            <Image
              src={work.image}
              alt={`${work.title.en}'s image`}
              height={300}
              width={500}
              objectFit="cover"
              layout="responsive"
            />
          </div>
          <div className="pt-4">
            <h3 className="text-2xl flex justify-center max-w-full mx-auto text-justify">
              {work.title[currLocale]}
            </h3>
            <div className="mt-4 text-center">
              <WorkDetailsDate
                year={work.finishYear}
                month={work.finishMonth}
              />
            </div>
          </div>
          <p className="flex justify-center text-justify">
            {work.description[currLocale]}
          </p>
          <WorkDetailsTechnologyUsed technologyUsed={work.technologyUsed} />
          <WorkDetailsLinks
            pageSrc={work.page}
            repositorySrc={work.repository}
          />
        </div>
        <div className="bg-inherit h-4 w-full sticky bottom-0 rounded-lg" />
      </section>
    </div>
  </div>
);
