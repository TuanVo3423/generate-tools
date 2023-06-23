import { SEO } from '@/components';
import Home from '@/features/Home';
import { MainLayout } from '@/layouts';
import { NextPageWithLayout } from '@/types';
import { Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';

const HomePage: NextPageWithLayout = () => {
  return (
    <Box>
      <SEO
        data={{
          title: 'Generate Your document with AI in 30 Seconds',
          description:
            'AI tools builder. From curated images to AI-written content, get the professional site your business needs with none of the work. ',
          url: '',
          thumbnailUrl: '',
        }}
      />
      <Home />
    </Box>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page: ReactElement) {
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
