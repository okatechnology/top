import { VFC } from 'react';
import Image from 'next/image';

export interface SkillsItemProps {
  logo: string;
  name: string;
}
export const SkillsItem: VFC<SkillsItemProps> = (props) => {
  return <SkillsItemPresentational {...props} />;
};

interface SkillsItemPresentationalProps extends SkillsItemProps {}
const SkillsItemPresentational: VFC<SkillsItemPresentationalProps> = ({
  logo,
  name,
}) => (
  <div>
    <div className="w-full max-w-24 mx-auto p-2 dark:bg-gray-50 rounded-lg">
      <Image
        src={logo}
        alt={`${name} logo`}
        layout="responsive"
        width="80"
        height="80"
        objectFit="contain"
      />
    </div>
    <p className="text-center mt-2">{name}</p>
  </div>
);
