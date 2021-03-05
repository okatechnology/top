import React from 'react';

export interface MainSectionInfo {
  ref: React.RefObject<HTMLElement>;
  name: string;
}

export type SkyTheme = 'bluesky' | 'sunset' | 'night';
