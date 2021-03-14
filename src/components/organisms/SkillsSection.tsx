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
        <ul className="grid pc:grid-cols-2 wpc:grid-cols-3 gap-x-8 gap-y-16">
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
