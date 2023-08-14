import { SEO } from '@/components';
import { SignIn } from '@/features/Auth';
import { NextPageWithLayout } from '@/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SignInPage: NextPageWithLayout = () => {
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
      <SignIn />
    </>
  );
};

export default SignInPage;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ['common'])),
      // Will be passed to the page component as props
    },
  };
};
