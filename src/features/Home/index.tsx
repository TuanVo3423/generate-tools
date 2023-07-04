import { movePage } from '@/motion';
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  return (
    <Box as={motion.div} {...movePage} w="full" h="full">
      <Box
        maxW="690px"
        mx="auto"
        position="relative"
        p={10}
        h="calc(100vh - 120px)"
        _before={{
          content: '""',
          opacity: 0.5,
          zIndex: '1',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: '50%',
          transform: 'translate(-50%)',
          bgImage: '/bg.png',
          bgRepeat: 'no-repeat',
        }}
      >
        <Stack
          zIndex="2"
          color="white"
          pos="absolute"
          h="full"
          top={0}
          left={0}
          justify="center"
        >
          <Stack spacing={4} textAlign="center">
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize="72px"
              lineHeight="80px"
            >
              Build a document in 30 seconds using chatGPT
            </Text>
            <Text color="#9ca3af" fontSize="20px" lineHeight="28px">
              Get your business online today with the #1 AI website builder.
            </Text>
            <Flex justify="center">
              <Button
                onClick={() => router.push('/generate-document')}
                variant="primary-v2"
                maxW="200px"
              >
                Get Started
              </Button>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
