import { useMemo, VFC } from 'react';
import { intoTypedLocale } from 'src/utils/utilFunctions';
import { useRouter } from 'next/dist/client/router';
import { months } from './workDetailsDate.core';

export interface WorkDetailsDateProps {
  year: number;
  month: Month;
}
export const WorkDetailsDate: VFC<WorkDetailsDateProps> = (props) => {
  const { month } = props;
  const currLocale = intoTypedLocale(useRouter().locale);
  const monthStr = useMemo(() => months[month - 1], [month]);
  return (
    <WorkDetailsDatePresentational
      {...props}
      currLocale={currLocale}
      monthStr={monthStr}
    />
  );
};

interface WorkDetailsDatePresentationalProps extends WorkDetailsDateProps {
  currLocale: LocaleName;
  monthStr: string | undefined;
}
const WorkDetailsDatePresentational: VFC<WorkDetailsDatePresentationalProps> = ({
  year,
  month,
  monthStr,
  currLocale,
}) => (
  <div>
    <p>
      {currLocale === 'en' ? `${monthStr ?? ''} ${year}` : `${year}.${month}`}
    </p>
  </div>
);
