type ProjectConfig = {
  [P in ContactName as P extends 'mail' ? `${P}Address` : `${P}Id`]: string;
};

export const projectConfig: ProjectConfig = {
  twitterId: 'okatechnology',
  instagramId: 'oka_technology',
  facebookId: 'okatechnology2020',
  mailAddress: 'okazoetonkotsu@gmail.com',
  githubId: 'okatechnology',
};
