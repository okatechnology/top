import { VFC } from 'react';
import { IndexProps } from '@pages/index';

interface IndexTemplateProps extends IndexProps {}
export const IndexTemplate: VFC<IndexTemplateProps> = (props) => {
  return <IndexTemplatePresentational {...props} />;
};

interface IndexTemplatePresentational extends IndexTemplateProps {}
const IndexTemplatePresentational: VFC<IndexTemplatePresentational> = () => (
  <>
    <h1>test</h1>
    <p>test2</p>
  </>
);
