import { ButtonToSectionGroup } from '@molecules/ButtonToSectionGroup';
import { MainSectionInfo } from '@templates/indexTemplate.core';
import { ContactLinkGroup } from '@molecules/ContactLinkGroup';
import React, { VFC } from 'react';
import { staticPath } from 'src/lib/$path';

interface MainVisualProps {
  contentsVisiable: boolean;
  mainSectionInfo: MainSectionInfo[];
}
export const MainVisual: VFC<MainVisualProps> = (props) => {
  const currYear = new Date().getFullYear();
  return <MainVisualPresentational {...props} currYear={currYear} />;
};

interface MainVisualPresentationalProps extends MainVisualProps {
  currYear: number;
}
export const MainVisualPresentational: VFC<MainVisualPresentationalProps> = ({
  mainSectionInfo,
  currYear,
  contentsVisiable,
}) => (
  <div className="h-screen pc:grid">
    <div
      className={`grid gap-6 pc: self-center justify-self-end w-full ${
        contentsVisiable ? 'max-w-5xl' : 'max-w-full'
      } transition-max-w duration-700`}
    >
      <img
        className="h-16 block mx-auto"
        src={staticPath.face_white_svg}
        alt="main Icon"
        height="64"
      />
      <h1 className="text-5xl text-center font-bold tracking-wide">
        OKA.TECHNOLOGY
      </h1>
      <ButtonToSectionGroup mainSections={mainSectionInfo} />
      <div className="justify-self-center">
        <ContactLinkGroup />
      </div>
      <small className="text-xs text-center">
        © 2021{currYear > 2021 ? `-${currYear}` : undefined} Kaoru Okazoe
      </small>
    </div>
  </div>
);
