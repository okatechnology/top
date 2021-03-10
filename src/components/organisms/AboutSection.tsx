import { VFC } from 'react';
import { staticPath } from 'src/lib/$path';
import { SectionGridLayout } from '../gridLayout/SectionGridLayout';
import { ABOUT_SECTION_TEXT } from './aboutSection.core';

interface AboutSectionProps {}
export const AboutSection: VFC<AboutSectionProps> = (props) => {
  return <AboutSectionPresentational {...props} />;
};

interface AboutSectionPresentationalProps extends AboutSectionProps {}
const AboutSectionPresentational: VFC<AboutSectionPresentationalProps> = () => (
  <SectionGridLayout
    title="ABOUT"
    contents={
      <div>
        <div className="rounded-full border-2 border-gray-100 dark:border-gray-800 w-40 h-40 mx-auto flex justify-center items-center">
          <img
            className="object-cover block"
            src={staticPath.face_above_svg}
            alt="face seen from above"
            width="144"
            height="144"
          />
        </div>
        <div className="grid gap-2 mt-8">
          {ABOUT_SECTION_TEXT.split('\n').map((line, i) => (
            <p key={i} className="w-max max-w-full mx-auto">
              {line}
            </p>
          ))}
        </div>
      </div>
    }
  />
);
