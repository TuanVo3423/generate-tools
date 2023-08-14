import { AuthComputer, AuthLogin } from '@/icons';
import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const router = useRouter();
  const isRegisterPage = router.pathname === '/auth/sign-up';

  const renderBottomLeft = () => {
    if (isRegisterPage)
      return (
        <Stack spacing={10}>
          <HStack spacing={4}>
            <Box bg="#374151" p="10px" rounded="full">
              <Icon as={AuthComputer} w="24px" h="24px" />
            </Box>
            <VStack spacing={0} align="flex-start" justify="center">
              <Text fontWeight="bold" fontSize="20px">
                1.5M +
              </Text>
              <Text fontSize=".875rem">Documents created</Text>
            </VStack>
          </HStack>
          <HStack>
            <Box>
              <Image src="/auth-left-1.png" alt="logo1" />
            </Box>
            <Box>
              <Image src="/auth-left-2.png" alt="logo2" />
            </Box>
            <Box>
              <Image src="/auth-left-3.png" alt="logo3" />
            </Box>
          </HStack>
        </Stack>
      );
  };
  return (
    <Flex w="100%">
      <Stack
        pos="relative"
        justify="center"
        align="center"
        p={10}
        bg={isRegisterPage ? '#111827' : '#4330c0'}
        spacing={10}
        w="30%"
        minH="100vh"
      >
        <Box pos="absolute" left={8} top={10}>
          <Image src="/logo.png" w="60px" h="60px" alt="logo" />
        </Box>
        <Box>
          <Icon as={AuthLogin} w="390px" h="314px" />
        </Box>

        {renderBottomLeft()}
      </Stack>
      <Box w="70%" minH="100vh">
        {children}
      </Box>
    </Flex>
  );
};
