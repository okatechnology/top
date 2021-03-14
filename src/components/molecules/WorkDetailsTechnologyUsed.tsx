import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { VFC } from 'react';
import { technology } from 'src/data/technology';
import { intoTypedLocale } from 'src/utils/utilFunctions';

export interface WorkDetailsTechnologyUsedProps {
  technologyUsed: TechnologyName[];
}
export const WorkDetailsTechnologyUsed: VFC<WorkDetailsTechnologyUsedProps> = (
  props,
) => {
  const currLocale = intoTypedLocale(useRouter().locale);
  return (
    <WorkDetailsTechnologyUsedPresentational
      {...props}
      currLocale={currLocale}
    />
  );
};

interface WorkDetailsTechnologyUsedPresentationalProps
  extends WorkDetailsTechnologyUsedProps {
  currLocale: LocaleName;
}
const WorkDetailsTechnologyUsedPresentational: VFC<WorkDetailsTechnologyUsedPresentationalProps> = ({
  technologyUsed,
  currLocale,
}) => (
  <div className="">
    <h4 className="text-lg text-center">
      {{ en: 'Technology used', ja: '使用技術' }[currLocale]}
    </h4>
    <ul className="flex flex-wrap justify-center mt-2">
      {technologyUsed.map((technologyName) => (
        <li
          key={technologyName}
          className="flex items-center justify-center px-4 py-2"
        >
          <div className="w-10 h-10 p-1 dark:bg-gray-100 rounded">
            <Image
              src={technology[technologyName].logo}
              width={32}
              height={32}
              objectFit="contain"
              layout="responsive"
            />
          </div>
          <p className="ml-2">{technology[technologyName].name}</p>
        </li>
      ))}
    </ul>
  </div>
);
