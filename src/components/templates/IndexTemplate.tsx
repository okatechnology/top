import React, { useEffect, useMemo, useRef, useState, VFC } from 'react';
import { IndexProps } from '@pages/index';
import { WholeGridLayout } from '../gridLayout/WholeGridLayout';
import { MainVisual } from '@organisms/MainVisual';
import { MainSectionInfo, SkyTheme } from '@templates/indexTemplate.core';

interface IndexTemplateProps extends IndexProps {}
export const IndexTemplate: VFC<IndexTemplateProps> = (props) => {
  const [skyTheme, setSkyTheme] = useState<SkyTheme>('bluesky');
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

  useEffect(() => {
    const skyThemeSetter = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      if (hours >= 18 || hours < 5 || (hours === 5 && minutes < 30)) {
        setSkyTheme('night');
      } else if (
        (hours === 5 && minutes >= 30) ||
        (hours === 17 && minutes >= 30)
      ) {
        setSkyTheme('sunset');
      } else {
        setSkyTheme('bluesky');
      }
      checkTime();
    };
    const checkTime = () => {
      setTimeout(() => {
        skyThemeSetter();
      }, 60000);
    };
    skyThemeSetter();
  }, []);

  return (
    <IndexTemplatePresentational
      {...props}
      mainSectionInfo={mainSectionInfo}
      skyTheme={skyTheme}
    />
  );
};

interface IndexTemplatePresentational extends IndexTemplateProps {
  mainSectionInfo: MainSectionInfo[];
  skyTheme: SkyTheme;
}
const IndexTemplatePresentational: VFC<IndexTemplatePresentational> = ({
  mainSectionInfo,
  skyTheme,
}) => (
  <WholeGridLayout
    mainVisual={
      <div
        className={`relative text-white bg-bluesky transition-bg-image pc:h-screen pc:grid`}
      >
        <div
          className={`absolute top-0 right-0 bottom-0 left-0 bg-sunset transition-opacity duration-1000 opacity-${
            skyTheme === 'sunset' ? 100 : 0
          }`}
        ></div>
        <div
          className={`absolute top-0 right-0 bottom-0 left-0 bg-night transition-opacity duration-1000 opacity-${
            skyTheme === 'night' ? 100 : 0
          }`}
        ></div>
        <div className="pc:self-center z-10">
          <MainVisual mainSectionInfo={mainSectionInfo} />
        </div>
      </div>
    }
    contents={
      <div>
        <section ref={mainSectionInfo[0]?.ref}></section>
        <section ref={mainSectionInfo[1]?.ref}></section>
        <section ref={mainSectionInfo[2]?.ref}></section>
      </div>
    }
  />
);
