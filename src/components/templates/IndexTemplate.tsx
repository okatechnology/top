import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  VFC,
} from 'react';
import { IndexProps } from '@pages/index';
import { WholeGridLayout } from '../gridLayout/WholeGridLayout';
import { MainVisual } from '@organisms/MainVisual';
import { MainSectionInfo } from '@templates/indexTemplate.core';
import { AboutSection } from '@organisms/AboutSection';
import { SkyTheme } from '@molecules/SkyTheme';
import { SkillsSection } from '@organisms/SkillsSection';
import {
  ScrollEffectCallback,
  useScrollEffect,
} from '../context/useScrollEffect';

interface IndexTemplateProps extends IndexProps {}
export const IndexTemplate: VFC<IndexTemplateProps> = (props) => {
  const [contentsVisiable, setContentsVisiable] = useState(false);
  const [whileTransition, setWhileTransition] = useState(false);
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
    if (!whileTransition && contentsVisiable) {
      document.body.style.overflow = 'auto';
    }
  }, [contentsVisiable, whileTransition]);

  useEffect(() => {
    const wheelEvent = () => {
      if (!contentsVisiable) {
        setWhileTransition(true);
        setContentsVisiable(true);
      }
    };
    window.addEventListener('wheel', wheelEvent);

    return () => {
      window.removeEventListener('wheel', wheelEvent);
    };
  }, [contentsVisiable]);

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

  return (
    <IndexTemplatePresentational
      {...props}
      aboutSectionRef={aboutSectionRef}
      skillsSectionRef={skillsSectionRef}
      worksSectionRef={worksSectionRef}
      mainSectionInfo={mainSectionInfo}
      contentsVisiable={contentsVisiable}
      visiableTransitionEnd={handleVisiableTransitionEnd}
    />
  );
};

interface IndexTemplatePresentational extends IndexTemplateProps {
  aboutSectionRef: React.RefObject<HTMLElement>;
  skillsSectionRef: React.RefObject<HTMLElement>;
  worksSectionRef: React.RefObject<HTMLElement>;
  mainSectionInfo: MainSectionInfo[];
  contentsVisiable: boolean;
  visiableTransitionEnd: () => void;
}
const IndexTemplatePresentational: VFC<IndexTemplatePresentational> = ({
  aboutSectionRef,
  skillsSectionRef,
  worksSectionRef,
  mainSectionInfo,
  contentsVisiable,
  visiableTransitionEnd,
}) => (
  <WholeGridLayout
    mainVisual={
      <header>
        <SkyTheme
          contents={
            <MainVisual
              mainSectionInfo={mainSectionInfo}
              contentsVisiable={contentsVisiable}
            />
          }
        />
      </header>
    }
    contents={
      <main className="max-w-5xl p-8">
        <section className="p-8" ref={aboutSectionRef}>
          <AboutSection />
        </section>
        <section className="p-8" ref={skillsSectionRef}>
          <SkillsSection />
        </section>
        <section className="p-8" ref={worksSectionRef}></section>
      </main>
    }
    contentsVisiable={contentsVisiable}
    visiableTransitionEnd={visiableTransitionEnd}
  />
);
