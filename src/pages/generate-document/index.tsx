import { SEO } from '@/components';
import { GenerateDocument } from '@/features';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';
import ChatLayout from './components';

const GenerateDocumentPage: NextPageWithLayout = () => {
  return (
    <>
      <SEO
        data={{
          title: 'Generate Document',
          description:
            'AI tools builder. From curated images to AI-written content, get the professional site your business needs with none of the work. ',
          url: '',
          thumbnailUrl: '',
        }}
      />
      <GenerateDocument />
    </>
  );
};

export default GenerateDocumentPage;
GenerateDocumentPage.getLayout = function getLayout(page: ReactElement) {
  return <ChatLayout>{page}</ChatLayout>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ['common'])),
      // Will be passed to the page component as props
    },
  };
};
