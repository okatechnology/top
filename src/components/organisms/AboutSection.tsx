import { useRouter } from 'next/dist/client/router';
import { VFC } from 'react';
import { staticPath } from 'src/utils/$path';
import { intoTypedLocale } from 'src/utils/utilFunctions';
import { SectionLayout } from '../molecules/SectionLayout';
import { aboutSectionText } from './aboutSection.core';

interface AboutSectionProps {}
export const AboutSection: VFC<AboutSectionProps> = (props) => {
  const currLocale = intoTypedLocale(useRouter().locale);
  return <AboutSectionPresentational {...props} currLocale={currLocale} />;
};

interface AboutSectionPresentationalProps extends AboutSectionProps {
  currLocale: LocaleName;
}
const AboutSectionPresentational: VFC<AboutSectionPresentationalProps> = ({
  currLocale,
}) => (
  <SectionLayout
    title="ABOUT"
    contents={
      <div>
        <div className="rounded-full border-2 border-gray-100 dark:border-gray-800 transition-border-color duration-700 ease-linear w-40 h-40 mx-auto flex justify-center items-center">
          <img
            className="object-cover block"
            src={staticPath.face_above_svg}
            alt="face seen from above"
            width="144"
            height="144"
          />
        </div>
        <div className="grid gap-2 mt-8">
          {aboutSectionText[currLocale].split('\n').map((line, i) => (
            <p key={i} className="w-max max-w-full mx-auto text-justify">
              {line}
            </p>
          ))}
        </div>
      </div>
    }
  />
);
