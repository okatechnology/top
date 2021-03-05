import { ButtonToSectionGroup } from '@molecules/ButtonToSectionGroup';
import { MainSectionInfo } from '@templates/indexTemplate.core';
import { ContactLinkGroup } from '@molecules/ContactLinkGroup';
import React, { VFC } from 'react';
import { staticPath } from 'src/lib/$path';

interface MainVisualProps {
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
}) => (
  <div className="grid gap-6">
    <img
      className="h-16 block mx-auto"
      src={staticPath.face_white_svg}
      alt="main Icon"
      height="64"
    />
    <h1 className="text-4xl text-center tracking-wide">OKA TECHNOLOGY</h1>
    <div className="justify-self-center">
      <ContactLinkGroup />
    </div>
    <ButtonToSectionGroup mainSections={mainSectionInfo} />
    <small className="text-xs text-center">
      © 2021{currYear > 2021 ? `-${currYear}` : undefined} Kaoru Okazoe
    </small>
  </div>
);
