import { IndexTemplate } from '@templates/IndexTemplate';
import { VFC } from 'react';
import Head from 'next/head';

export interface IndexProps {}

const Index: VFC<IndexProps> = (props) => (
  <>
    <Head>
      <title>OKA.TECHNOLOGY</title>
    </Head>
    <IndexTemplate {...props} />
  </>
);

export default Index;
