import { Box, Button, HStack, Image } from '@chakra-ui/react';
import PopoverNavigation from './PopoverNavigation';
import { routes } from './data';

const HeaderDesktop = () => {
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
        <Button variant="primary-v2" w="fit-content">
          Sign in
        </Button>
        <Button variant="secondary-v2" w="fit-content">
          Build your site
        </Button>
      </HStack>
    </HStack>
  );
};

export default HeaderDesktop;
