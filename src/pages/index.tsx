import { SEO } from '@/components';
import { MainLayout } from '@/layouts';
import { NextPageWithLayout } from '@/types';
import { Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';

const HomePage: NextPageWithLayout = () => {
  return (
    <Box color="red">
      <SEO
        data={{
          title: '',
          description:
            'Help you have all the necessary knowledge to become a Fresher NextJS!',
          url: '',
          thumbnailUrl: '',
        }}
      />
      hello
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
