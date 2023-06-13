import { Button, HStack, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  return (
    <Stack>
      <Text>Wellcome titus!</Text>
      <HStack>
        <Button onClick={() => router.push('generate-document')}>
          Generate document
        </Button>
        <Button>Generate music</Button>
        <Button>Generate image</Button>
      </HStack>
    </Stack>
  );
};

export default Home;
