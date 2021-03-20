import React from 'react';

export type SectionsRefName =
  | 'aboutSectionRef'
  | 'skillsSectionRef'
  | 'worksSectionRef';

export interface MainSectionInfo {
  ref: React.RefObject<HTMLElement>;
  name: string;
}
