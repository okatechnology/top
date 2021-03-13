import { VFC } from 'react';
import Image from 'next/image';

export interface WorksItemProps {
  title: string;
  image: string;
  focusable: boolean;
  onClick: () => void;
}
export const WorksItem: VFC<WorksItemProps> = (props) => {
  return <WorksItemPresentational {...props} />;
};

interface WorksItemPresentationalProps extends WorksItemProps {}
const WorksItemPresentational: VFC<WorksItemPresentationalProps> = ({
  image,
  title,
  focusable,
  onClick,
}) => (
  <button
    className="group overflow-hidden relative rounded-lg h-40 w-full border-2 border-gray-100 dark:border-gray-700 transform hover:scale-105 focus:scale-105 focus:outline-none focus:shadow-works-item transition-transform duration-300 tracking-wider"
    type="button"
    onClick={onClick}
    tabIndex={focusable ? 0 : -1}
  >
    <span className="absolute top-0 right-0 bottom-0 left-0 z-10 w-4/5 mx-auto text-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
      {title}
    </span>
    <Image
      className="work-image-base group-hover:work-image-hover group-focus:work-image-focus transition-filter duration-300"
      src={image}
      alt={`${title}'s image`}
      layout="fill"
      objectFit="cover"
    />
  </button>
);
