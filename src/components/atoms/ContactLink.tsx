import { VFC } from 'react';
import { contactData } from './ContactLink.core';
import Link from 'next/link';

interface ContactLinkProps {
  type: Contact;
}
export const ContactLink: VFC<ContactLinkProps> = (props) => {
  return <ContactLinkPresentational {...props} />;
};

interface ContactLinkPresentationalProps extends ContactLinkProps {}
export const ContactLinkPresentational: VFC<ContactLinkPresentationalProps> = ({
  type,
}) => (
  <Link href={contactData[type].link} passHref={true}>
    <a>
      <img
        className="block h-12"
        src={contactData[type].iconImage}
        alt={`${type} icon`}
        height="48"
        width="48"
      />
    </a>
  </Link>
);
