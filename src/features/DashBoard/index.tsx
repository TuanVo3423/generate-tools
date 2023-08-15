import { Button, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from './components/layout';
import { useGetDocumentOfUser } from '@/api/auth';
import { DocumentCard } from './components/DocumentCard';
import { TDocumentCardProps } from './components/DocumentCard';
import { useAuth } from '@/store';

const DashBoard: NextPage = () => {
  const router = useRouter();
  const { data, isLoading } = useGetDocumentOfUser();
  const currentUser = useAuth((state) => state.profile);

  return (
    <Layout>
      <Stack spacing={8}>
        {/* <Header /> */}

        <Stack spacing={8}>
          <Heading size="lg" color="white">
            {`Hi ${currentUser.name}! Which function you want to use below?`}
          </Heading>
          <Stack direction="row">
            <Button
              variant="primary-v2"
              maxW="200px"
              onClick={() => router.push('/generate-document')}
            >
              Generate document
            </Button>
            <Button variant="secondary-v2" maxW="200px">
              Generate code project
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Heading size="lg" color="white">
            Your documents
          </Heading>
          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={6}>
            {data?.length === 0 ? (
              <Text>You have no documents yet!</Text>
            ) : (
              <>
                {data &&
                  data.map((item: any) => (
                    <DocumentCard
                      _id={item._id}
                      content={item.content}
                      description_project={item.description_project}
                      name_project={item.name_project}
                      user_id={item.user_id}
                      createdAt={item.created_at}
                      key={item._id}
                    />
                  ))}
              </>
            )}
          </Grid>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default DashBoard;
