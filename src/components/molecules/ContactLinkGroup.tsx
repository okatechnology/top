import { ContactLink } from '@atoms/ContactLink';
import { VFC } from 'react';

interface ContactLinkGroupProps {}
export const ContactLinkGroup: VFC<ContactLinkGroupProps> = (props) => {
  return <ContactLinkGroupPresentational {...props} />;
};

interface ContactLinkGroupPresentationalProps extends ContactLinkGroupProps {}
export const ContactLinkGroupPresentational: VFC<ContactLinkGroupPresentationalProps> = () => (
  <div className="grid grid-cols-5-max gap-6 auto-cols-min">
    <ContactLink type="github" color="white" />
    <ContactLink type="twitter" color="white" />
    <ContactLink type="instagram" color="white" />
    <ContactLink type="facebook" color="white" />
    <ContactLink type="mail" color="white" />
  </div>
);
