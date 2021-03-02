import { IndexTemplate } from '@templates/IndexTemplate';
import { VFC } from 'react';

export interface IndexProps {}

const Index: VFC<IndexProps> = (props) => <IndexTemplate {...props} />;

export default Index;
