import { staticPath } from 'src/utils/$path';
import { projectConfig } from 'src/projectConfig';

export type ContactColorType = 'normal' | 'white';

interface ContactData {
  iconImage: Record<ContactColorType, string>;
  link: string;
}

export const contactData: Record<ContactName, ContactData> = {
  twitter: {
    link: `https://twitter.com/${projectConfig.twitterId}`,
    iconImage: {
      normal: staticPath.twitterIcon_svg,
      white: staticPath.twitterIcon_white_svg,
    },
  },
  instagram: {
    link: `https://www.instagram.com/${projectConfig.instagramId}/`,
    iconImage: {
      normal: staticPath.instagramIcon_svg,
      white: staticPath.instagramIcon_white_svg,
    },
  },
  facebook: {
    link: `https://www.facebook.com/${projectConfig.facebookId}`,
    iconImage: {
      normal: staticPath.facebookIcon_svg,
      white: staticPath.facebookIcon_white_svg,
    },
  },
  mail: {
    link: `mailto:${projectConfig.mailAddress}`,
    iconImage: {
      normal: staticPath.emailIcon_svg,
      white: staticPath.emailIcon_white_svg,
    },
  },
  github: {
    link: `https://github.com/${projectConfig.githubId}`,
    iconImage: {
      normal: staticPath.githubIcon_white_svg,
      white: staticPath.githubIcon_white_svg,
    },
  },
};
