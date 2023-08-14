import { Box, Button, HStack, Image } from '@chakra-ui/react';
import PopoverNavigation from './PopoverNavigation';
import { routes } from './data';
import { useRouter } from 'next/router';
import { useGetAuth } from '@/api/auth';

export type THeaderDesktop = {
  currentUser: any;
};
const HeaderDesktop = ({ currentUser }: THeaderDesktop) => {
  // const data = useGetAuth();
  const router = useRouter();
  return (
    <HStack
      display={['none', 'none', 'none', 'flex']}
      p={10}
      align="center"
      justify="space-between"
      maxH="70px"
    >
      <HStack spacing="32px">
        <Box h="full">
          <Image w="full" h="50px" src="/logo.png" alt="logo" />
        </Box>
        <HStack align="center" spacing="32px">
          {routes.map((route, idx: number) => (
            <PopoverNavigation
              key={idx}
              options={route.options}
              title={route.title}
            />
          ))}
        </HStack>
      </HStack>
      <HStack>
        {currentUser ? (
          <Button
            onClick={() => router.push('/dashboard')}
            variant="primary-v2"
          >
            Dashboard
          </Button>
        ) : (
          <Button
            onClick={() => router.push('/auth/sign-in')}
            variant="primary-v2"
            w="fit-content"
          >
            Sign in
          </Button>
        )}
        <Button
          onClick={() => router.push('/generate-document')}
          variant="secondary-v2"
        >
          Build your site
        </Button>
      </HStack>
    </HStack>
  );
};

export default HeaderDesktop;
