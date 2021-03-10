import { SkillsItem } from '@molecules/SkillsItem';
import { VFC } from 'react';
import { SectionGridLayout } from '../gridLayout/SectionGridLayout';
import { skills } from './skillsSection.core';

interface SkillsSectionProps {}
export const SkillsSection: VFC<SkillsSectionProps> = () => {
  return <SkillsSectionPresentational />;
};

interface SkillsSectionPresentationalProps {}
const SkillsSectionPresentational: VFC<SkillsSectionPresentationalProps> = () => (
  <div>
    <SectionGridLayout
      title="SKILLS"
      contents={
        <ul className="grid pc:grid-cols-2 wpc:grid-cols-3 gap-8">
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
