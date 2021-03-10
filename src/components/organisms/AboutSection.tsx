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
        <img
          className="object-cover block mx-auto opacity-80"
          src={staticPath.face_above_svg}
          alt="face seen from above"
          width="160"
          height="160"
        />
        <div className="grid gap-2 mt-2">
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
