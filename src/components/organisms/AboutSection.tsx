import { VFC } from 'react';
import { SectionGridLayout } from '../gridLayout/SectionGridLayout';
import { ABOUT_SECTION_TEXT } from './aboutSection.core';

interface AboutSectionProps {}
export const AboutSection: VFC<AboutSectionProps> = (props) => {
  return <AboutSectionPresentational {...props} />;
};

interface AboutSectionPresentationalProps extends AboutSectionProps {}
const AboutSectionPresentational: VFC<AboutSectionPresentationalProps> = () => (
  <div className="text-white bg-about bg-cover bg-right">
    <SectionGridLayout
      title="ABOUT"
      contents={
        <div className="w-3/5">
          <p>
            {ABOUT_SECTION_TEXT.split('\n').flatMap((line, i) => [
              line,
              <br key={i} />,
            ])}
          </p>
        </div>
      }
    />
  </div>
);
