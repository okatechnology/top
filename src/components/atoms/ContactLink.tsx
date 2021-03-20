import { VFC } from 'react';
import { contactData, ContactColorType } from './contactLink.core';
import Link from 'next/link';

interface ContactLinkProps {
  type: ContactName;
  color: ContactColorType;
}
export const ContactLink: VFC<ContactLinkProps> = (props) => {
  return <ContactLinkPresentational {...props} />;
};

interface ContactLinkPresentationalProps extends ContactLinkProps {}
const ContactLinkPresentational: VFC<ContactLinkPresentationalProps> = ({
  type,
  color,
}) => (
  <Link href={contactData[type].link} passHref={true}>
    <a>
      <img
        className="block h-10 pc:h-12 w-10 pc:w-12"
        src={contactData[type].iconImage[color]}
        alt={`${type} icon`}
        height="48"
        width="48"
      />
    </a>
  </Link>
);
