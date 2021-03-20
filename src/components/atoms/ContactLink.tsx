import { VFC } from 'react';
import { contactData } from './contactLink.core';
import Link from 'next/link';

interface ContactLinkProps {
  type: ContactName;
}
export const ContactLink: VFC<ContactLinkProps> = (props) => {
  const { type } = props;
  const IconImage = contactData[type].IconImage;
  return <ContactLinkPresentational {...props} IconImage={IconImage} />;
};

interface ContactLinkPresentationalProps extends ContactLinkProps {
  IconImage: React.VFC<SvgsProps>;
}
const ContactLinkPresentational: VFC<ContactLinkPresentationalProps> = ({
  type,
  IconImage,
}) => (
  <Link href={contactData[type].link} passHref={true}>
    <a className="group rounded-full focus:outline-none hover:ring-1 focus:ring-2 ring-white focus:ring-offset-2 ring-offset-blue-500 transform hover:scale-125 focus:scale-125 transition-transform duration-200">
      <IconImage className="block h-10 pc:h-12 w-10 pc:w-12" />
    </a>
  </Link>
);
