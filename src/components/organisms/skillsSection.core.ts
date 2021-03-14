import { SkillsItemProps } from '@molecules/SkillsItem';
import { technology } from 'src/data/technology';

export const skills: SkillsItemProps[] = Object.values(
  technology,
).map(({ name, logo }) => ({ name, logo }));
