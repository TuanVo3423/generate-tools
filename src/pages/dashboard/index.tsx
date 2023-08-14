import { SEO } from '@/components';
import DashBoard from '@/features/DashBoard';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DashBoardPage: NextPageWithLayout = () => {
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
      <DashBoard />
    </>
  );
};

export default DashBoardPage;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ['common'])),
      // Will be passed to the page component as props
    },
  };
};
