import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import {
  ScrollEffectCallback,
  useScrollEffect,
} from '../context/useScrollEffect';
import { WorksSection } from '@organisms/WorksSection';
import { WorkDetails } from '@organisms/WorkDetails';
import { ButtonGroupAtPageTop } from '@organisms/ButtonGroupAtPageTop';
import { projectConfig } from 'src/projectConfig';
import { MordalForSP } from '@organisms/MordalForSP';

interface IndexTemplateProps extends IndexProps {}
export const IndexTemplate: React.VFC<IndexTemplateProps> = (props) => {
  const [contentsVisiable, setContentsVisiable] = useState(false);
  const [whileTransition, setWhileTransition] = useState(false);
  const [showingWork, setShowingWork] = useState<number>();
  const aboutSectionRef = useRef<HTMLElement>(null);
  const skillsSectionRef = useRef<HTMLElement>(null);
  const worksSectionRef = useRef<HTMLElement>(null);
  const scrollEffect = useScrollEffect();

  const mainSectionInfo = useMemo<MainSectionInfo[]>(
    () => [
      { ref: aboutSectionRef, name: 'ABOUT' },
      { ref: skillsSectionRef, name: 'SKILLS' },
      { ref: worksSectionRef, name: 'WORKS' },
    ],
    [],
  );

  const handleVisiableTransitionEnd = useCallback(() => {
    if (contentsVisiable) {
      document.body.style.overflow = 'auto';
    }
    setWhileTransition(false);
  }, [contentsVisiable]);

  useEffect(() => {
    if (window.innerWidth >= projectConfig.pcBreakpoint) {
      document.body.style.overflow = 'hidden';
    } else {
      setContentsVisiable(true);
    }
  }, []);

  useEffect(() => {
    if (!whileTransition && contentsVisiable) {
      document.body.style.overflow = 'auto';
    }
  }, [contentsVisiable, whileTransition]);

  useEffect(() => {
    const scrollEffectCallback: ScrollEffectCallback = ({ y }) => {
      if (y !== 0 && !contentsVisiable) {
        setWhileTransition(true);
        setContentsVisiable(true);
      }
    };
    scrollEffect.addEffectFunction(scrollEffectCallback);

    return () => {
      scrollEffect.removeEffectFunction(scrollEffectCallback);
    };
  }, [contentsVisiable, scrollEffect]);

  useEffect(() => {
    const wheelOrTouchEvent = () => {
      if (!contentsVisiable) {
        setWhileTransition(true);
        setContentsVisiable(true);
      }
    };
    window.addEventListener('wheel', wheelOrTouchEvent);
    window.addEventListener('touchstart', wheelOrTouchEvent);

    return () => {
      window.removeEventListener('wheel', wheelOrTouchEvent);
      window.removeEventListener('wheel', wheelOrTouchEvent);
    };
  }, [contentsVisiable]);

  return (
    <IndexTemplatePresentational
      {...props}
      sectionsRef={{ aboutSectionRef, skillsSectionRef, worksSectionRef }}
      mainSectionInfo={mainSectionInfo}
      contentsVisiable={contentsVisiable}
      visiableTransitionEnd={handleVisiableTransitionEnd}
      showingWork={showingWork}
      setShowingWork={setShowingWork}
    />
  );
};

interface IndexTemplatePresentational extends IndexTemplateProps {
  sectionsRef: Record<SectionsRefName, React.RefObject<HTMLElement>>;
  mainSectionInfo: MainSectionInfo[];
  contentsVisiable: boolean;
  visiableTransitionEnd: () => void;
  showingWork: number | undefined;
  setShowingWork: React.Dispatch<React.SetStateAction<number | undefined>>;
}
const IndexTemplatePresentational: React.VFC<IndexTemplatePresentational> = ({
  sectionsRef: { aboutSectionRef, skillsSectionRef, worksSectionRef },
  mainSectionInfo,
  contentsVisiable,
  visiableTransitionEnd,
  showingWork,
  setShowingWork,
}) => (
  <div>
    <WholeGridLayout
      mainVisual={
        <header>
          <SkyTheme
            contents={
              <MainVisual
                mainSectionInfo={mainSectionInfo}
                contentsVisiable={contentsVisiable}
                setShowingWork={setShowingWork}
              />
            }
          />
        </header>
      }
      contents={
        <main className="bg-gray-100 dark:bg-gray-800 transition-background-color duration-700 ease-linear">
          <div className="max-w-5xl pc:p-8 pc:pt-0 transition-colors duration-700 ease-linear">
            <div className="hidden pc:block">
              <ButtonGroupAtPageTop />
            </div>
            <section className="p-4 pt-8 pc:p-8" ref={aboutSectionRef}>
              <AboutSection />
            </section>
            <section className="p-4 pc:p-8" ref={skillsSectionRef}>
              <SkillsSection />
            </section>
            <section className="p-4 pc:p-8" ref={worksSectionRef}>
              <WorksSection
                showingWork={showingWork}
                setShowingWork={setShowingWork}
              />
              {showingWork != undefined ? (
                <WorkDetails
                  showingWork={showingWork}
                  setShowingWork={setShowingWork}
                />
              ) : undefined}
            </section>
          </div>
        </main>
      }
      contentsVisiable={contentsVisiable}
      visiableTransitionEnd={visiableTransitionEnd}
    />
    <MordalForSP
      mainSectionInfo={mainSectionInfo}
      setShowingWork={setShowingWork}
      buttons={<ButtonGroupAtPageTop />}
    />
  </div>
);
