import { VFC } from 'react';
import Link from 'next/link';

interface WorkDetailsLinkProps {
  title: string;
  link: string;
}
export const WorkDetailsLink: VFC<WorkDetailsLinkProps> = (props) => {
  return <WorkDetailsLinkPresentational {...props} />;
};

interface WorkDetailsLinkPresentationalProps extends WorkDetailsLinkProps {}
const WorkDetailsLinkPresentational: VFC<WorkDetailsLinkPresentationalProps> = ({
  title,
  link,
}) => (
  <div>
    <Link href={link} passHref={true}>
      <a className="group block hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-100 p-2 rounded">
        <h4 className="text-center text-lg">{title}</h4>
        <p className="flex justify-center text-justify break-all group-hover:underline">
          {link}
        </p>
      </a>
    </Link>
  </div>
);
