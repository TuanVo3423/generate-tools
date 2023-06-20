import { ParticlesComp } from '@/components';
import { Avatar, Button, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  return (
    <Stack p={10}>
      <ParticlesComp />
      <Flex gap={10} flexDir="column">
        <HStack justify="space-between">
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Hi Tuan, <br></br> Wellcome to ChatBoxAI
          </Text>
          <Avatar />
        </HStack>
        <HStack>
          <Button maxW="200px" onClick={() => router.push('generate-document')}>
            Generate document
          </Button>
          <Button maxW="200px">Generate music</Button>
          <Button maxW="200px" onClick={() => router.push('generate-image')}>
            Generate image
          </Button>
        </HStack>
      </Flex>
    </Stack>
  );
};

export default Home;
