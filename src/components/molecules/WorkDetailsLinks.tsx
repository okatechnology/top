import { WorkDetailsLink } from '@atoms/WorkDetailsLink';
import { useRouter } from 'next/dist/client/router';
import { VFC } from 'react';
import { intoTypedLocale } from 'src/utils/utilFunctions';

export interface WorkDetailsLinksProps {
  pageSrc: string | undefined;
  repositorySrc: string;
}
export const WorkDetailsLinks: VFC<WorkDetailsLinksProps> = (props) => {
  const currLocale = intoTypedLocale(useRouter().locale);
  return <WorkDetailsLinksPresentational {...props} currLocale={currLocale} />;
};

interface WorkDetailsLinksPresentationalProps extends WorkDetailsLinksProps {
  currLocale: LocaleName;
}
const WorkDetailsLinksPresentational: VFC<WorkDetailsLinksPresentationalProps> = ({
  pageSrc,
  repositorySrc,
  currLocale,
}) => (
  <div className="grid gap-4">
    {pageSrc != undefined ? (
      <WorkDetailsLink
        title={{ en: 'Page', ja: 'ページ' }[currLocale]}
        link={pageSrc}
      />
    ) : undefined}
    <WorkDetailsLink
      title={{ en: 'Repository', ja: 'レポジトリ' }[currLocale]}
      link={repositorySrc}
    />
  </div>
);
