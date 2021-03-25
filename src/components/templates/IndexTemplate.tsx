import React, { useMemo, useRef } from 'react';
import { IndexProps } from '@pages/index';
import { WholeGridLayout } from '../gridLayout/WholeGridLayout';
import { MainVisual } from '@organisms/MainVisual';
import {
  MainSectionInfo,
  SectionsRefName,
} from '@templates/indexTemplate.core';
import { AboutSection } from '@organisms/AboutSection';
import { SkyTheme } from '@molecules/SkyTheme';
import { SkillsSection } from '@organisms/SkillsSection';
import { WorksSection } from '@organisms/WorksSection';
import { WorkDetails } from '@organisms/WorkDetails';
import { ButtonGroupAtPageTop } from '@organisms/ButtonGroupAtPageTop';
import { useWorkModal } from '../context/useWorkModal';
import { projectConfig } from 'src/projectConfig';
import { MordalForSP } from '@organisms/MordalForSP';

interface IndexTemplateProps extends IndexProps {}

export const IndexTemplate: React.VFC<IndexTemplateProps> = (props) => {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const skillsSectionRef = useRef<HTMLElement>(null);
  const worksSectionRef = useRef<HTMLElement>(null);
  const { workModal } = useWorkModal();

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
      sectionsRef={{ aboutSectionRef, skillsSectionRef, worksSectionRef }}
      mainSectionInfo={mainSectionInfo}
      workModal={workModal}
    />
  );
};

interface IndexTemplatePresentational extends IndexTemplateProps {
  sectionsRef: Record<SectionsRefName, React.RefObject<HTMLElement>>;
  mainSectionInfo: MainSectionInfo[];
  workModal: number | undefined;
}

const IndexTemplatePresentational: React.VFC<IndexTemplatePresentational> = ({
  sectionsRef: { aboutSectionRef, skillsSectionRef, worksSectionRef },
  mainSectionInfo,
  workModal,
}) => (
  <div>
    <WholeGridLayout
      mainVisual={
        <header>
          <SkyTheme contents={<MainVisual mainSectionInfo={mainSectionInfo} />} />
        </header>
      }
      contents={
        <main className="bg-gray-100 dark:bg-gray-800 transition-background-color duration-700 ease-linear">
          <div className="max-w-5xl pc:p-8 pc:pt-0 transition-colors duration-700 ease-linear">
            <ButtonGroupAtPageTop />
            <section className="p-4 pc:p-8" ref={aboutSectionRef}>
              <AboutSection />
            </section>
            <section className="p-4 pc:p-8" ref={skillsSectionRef}>
              <SkillsSection />
            </section>
            <section className="p-4 pc:p-8" ref={worksSectionRef}>
              <WorksSection />
              {workModal != undefined ? <WorkDetails /> : undefined}
            </section>
          </div>
        </main>
      }
    />
    <MordalForSP
      mainSectionInfo={mainSectionInfo}
      setShowingWork={setShowingWork}
      buttons={<ButtonGroupAtPageTop />}
    />
  </div>
);
