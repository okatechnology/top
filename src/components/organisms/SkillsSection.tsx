import { SkillsItem } from '@molecules/SkillsItem';
import { VFC } from 'react';
import { SectionLayout } from '../molecules/SectionLayout';
import { skills } from './skillsSection.core';

interface SkillsSectionProps {}
export const SkillsSection: VFC<SkillsSectionProps> = () => {
  return <SkillsSectionPresentational />;
};

interface SkillsSectionPresentationalProps {}
const SkillsSectionPresentational: VFC<SkillsSectionPresentationalProps> = () => (
  <div>
    <SectionLayout
      title="SKILLS"
      contents={
        <ul className="grid grid-cols-2-max tb:grid-cols-3-max pc:grid-cols-2-max wpc:grid-cols-3-max gap-x-4 pc:gap-x-8 gap-y-12 pc:gap-y-16 justify-evenly">
          {skills.map((skill) => (
            <li key={skill.name}>
              <SkillsItem {...skill} />
            </li>
          ))}
        </ul>
      }
    />
  </div>
);
