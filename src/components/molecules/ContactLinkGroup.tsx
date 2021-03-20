import { ContactLink } from '@atoms/ContactLink';
import { VFC } from 'react';

interface ContactLinkGroupProps {}
export const ContactLinkGroup: VFC<ContactLinkGroupProps> = (props) => {
  return <ContactLinkGroupPresentational {...props} />;
};

interface ContactLinkGroupPresentationalProps extends ContactLinkGroupProps {}
export const ContactLinkGroupPresentational: VFC<ContactLinkGroupPresentationalProps> = () => (
  <div className="grid grid-cols-5-max gap-4 pc:gap-6 auto-cols-min">
    <ContactLink type="github" />
    <ContactLink type="twitter" />
    <ContactLink type="instagram" />
    <ContactLink type="facebook" />
  </div>
);
