import { staticPath } from 'src/lib/$path';
import { projectConfig } from 'src/projectConfig';

interface ContactData {
  iconImage: string;
  link: string;
}

export const contactData: Record<Contact, ContactData> = {
  twitter: {
    link: `https://twitter.com/${projectConfig.twitterId}`,
    iconImage: staticPath.twitterIcon_svg,
  },
  instagram: {
    link: `https://www.instagram.com/${projectConfig.instagramId}/`,
    iconImage: staticPath.instagramIcon_svg,
  },
  facebook: {
    link: `https://www.facebook.com/${projectConfig.facebookId}`,
    iconImage: staticPath.facebookIcon_svg,
  },
  mail: {
    link: `mailto:${projectConfig.mailAddress}`,
    iconImage: staticPath.emailIcon_svg,
  },
};
