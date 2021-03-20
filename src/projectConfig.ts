type ProjectConfig = {
  [P in ContactName as P extends 'mail' ? `${P}Address` : `${P}Id`]: string;
} &
  { [P in 'tb' | 'pc' | 'wpc' as `${P}Breakpoint`]: number };

export const projectConfig: ProjectConfig = {
  twitterId: 'okatechnology',
  instagramId: 'oka_technology',
  facebookId: 'okatechnology2020',
  mailAddress: 'okazoetonkotsu@gmail.com',
  githubId: 'okatechnology',
  tbBreakpoint: 768,
  pcBreakpoint: 992,
  wpcBreakpoint: 1200,
};
