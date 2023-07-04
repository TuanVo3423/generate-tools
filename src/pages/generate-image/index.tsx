import { SEO } from '@/components';
import { GenerateImage } from '@/features';
import { MainLayout } from '@/layouts';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';

const GenerateDocumentPage: NextPageWithLayout = () => {
  return (
    <>
      <SEO
        data={{
          title: 'Generate Images',
          description:
            'Help you have all the necessary knowledge to become a Fresher NextJS!',
          url: '',
          thumbnailUrl: '',
        }}
      />
      <GenerateImage />
    </>
  );
};

export default GenerateDocumentPage;
GenerateDocumentPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ['common'])),
      // Will be passed to the page component as props
    },
  };
};
