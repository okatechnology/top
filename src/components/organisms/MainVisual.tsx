import { ButtonToSectionGroup } from '@molecules/ButtonToSectionGroup';
import { MainSectionInfo } from '@templates/indexTemplate.core';
import { ContactLinkGroup } from '@molecules/ContactLinkGroup';
import React, { VFC } from 'react';
import { staticPath } from 'src/utils/$path';
import { useContentsVisible } from '../context/useContentsVisible';

interface MainVisualProps {
  mainSectionInfo: MainSectionInfo[];
}
export const MainVisual: VFC<MainVisualProps> = (props) => {
  const currYear = new Date().getFullYear();
  const { contentsVisible } = useContentsVisible();

  return (
    <MainVisualPresentational
      {...props}
      currYear={currYear}
      contentsVisiable={contentsVisible}
    />
  );
};

interface MainVisualPresentationalProps extends MainVisualProps {
  contentsVisiable: boolean;
  currYear: number;
}
export const MainVisualPresentational: VFC<MainVisualPresentationalProps> = ({
  contentsVisiable,
  mainSectionInfo,
  currYear,
}) => (
  <div className="min-h-screen flex items-center pc:justify-end">
    <div
      className={`grid gap-6 px-4 py-8 w-full ${
        contentsVisiable ? 'max-w-5xl' : 'max-w-full'
      } transition-max-w duration-700`}
    >
      <img
        className="h-14 pc:h-16 block mx-auto object-contain"
        src={staticPath.face_white_svg}
        alt="main Icon"
        height="56"
        width="256"
      />
      <h1 className="flex flex-wrap justify-center text-3xl pc:text-5xl text-center font-bold tracking-wider">
        <span>OKA</span>
        <span>.TECHNOLOGY</span>
      </h1>
      <div className="hidden pc:block">
        <ButtonToSectionGroup
          mainSections={mainSectionInfo}
          isAtSpMenuModal={false}
        />
      </div>
      <div className="justify-self-center">
        <ContactLinkGroup />
      </div>
      <small className="text-xs text-center">
        © 2021{currYear > 2021 ? `-${currYear}` : undefined} Kaoru Okazoe
      </small>
    </div>
  </div>
);
