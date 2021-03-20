import { projectConfig } from 'src/projectConfig';
import { EmainIconSvg } from '../svg/EmailIconSvg';
import { FacebookIconSvg } from '../svg/FacebookIconSvg';
import { GithubIconSvg } from '../svg/GithubIconSvg';
import { InstagramIconSvg } from '../svg/InstagramIconSvg';
import { TwitterIconSvg } from '../svg/TwitterIconSvg';

interface ContactData {
  IconImage: React.VFC<SvgsProps>;
  link: string;
}

export const contactData: Record<ContactName, ContactData> = {
  twitter: {
    link: `https://twitter.com/${projectConfig.twitterId}`,
    IconImage: TwitterIconSvg,
  },
  instagram: {
    link: `https://www.instagram.com/${projectConfig.instagramId}/`,
    IconImage: InstagramIconSvg,
  },
  facebook: {
    link: `https://www.facebook.com/${projectConfig.facebookId}`,
    IconImage: FacebookIconSvg,
  },
  mail: {
    link: `mailto:${projectConfig.mailAddress}`,
    IconImage: EmainIconSvg,
  },
  github: {
    link: `https://github.com/${projectConfig.githubId}`,
    IconImage: GithubIconSvg,
  },
};
