import React, { useMemo, useRef, VFC } from 'react';
import { IndexProps } from '@pages/index';
import { WholeGridLayout } from '../gridLayout/WholeGridLayout';
import { MainVisual } from '@organisms/MainVisual';
import { MainSectionInfo } from '@templates/indexTemplate.core';
import { AboutSection } from '@organisms/AboutSection';
import { SkyTheme } from '@molecules/SkyTheme';

interface IndexTemplateProps extends IndexProps {}
export const IndexTemplate: VFC<IndexTemplateProps> = (props) => {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const skillsSectionRef = useRef<HTMLElement>(null);
  const worksSectionRef = useRef<HTMLElement>(null);

  const mainSectionInfo = useMemo<MainSectionInfo[]>(
    () => [
      { ref: aboutSectionRef, name: 'ABOUT' },
      { ref: skillsSectionRef, name: 'SKILLS' },
      { ref: worksSectionRef, name: 'WORKS' },
    ],
    [],
  );

  return (
    <IndexTemplatePresentational
      {...props}
      aboutSectionRef={aboutSectionRef}
      skillsSectionRef={skillsSectionRef}
      worksSectionRef={worksSectionRef}
      mainSectionInfo={mainSectionInfo}
    />
  );
};

interface IndexTemplatePresentational extends IndexTemplateProps {
  aboutSectionRef: React.RefObject<HTMLElement>;
  skillsSectionRef: React.RefObject<HTMLElement>;
  worksSectionRef: React.RefObject<HTMLElement>;
  mainSectionInfo: MainSectionInfo[];
}
const IndexTemplatePresentational: VFC<IndexTemplatePresentational> = ({
  aboutSectionRef,
  skillsSectionRef,
  worksSectionRef,
  mainSectionInfo,
}) => (
  <WholeGridLayout
    mainVisual={
      <SkyTheme contents={<MainVisual mainSectionInfo={mainSectionInfo} />} />
    }
    contents={
      <div>
        <section ref={aboutSectionRef}>
          <AboutSection />
        </section>
        <section ref={skillsSectionRef}></section>
        <section ref={worksSectionRef}></section>
      </div>
    }
  />
);
