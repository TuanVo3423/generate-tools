import { PROJECT_AUTH_TOKEN } from '@/constants';
import { useAuth } from '@/store';
import {
  Avatar,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const { reload } = useRouter();
  const toast = useToast();
  const currentUser = useAuth((state) => state.profile);
  const handleLogout = () => {
    localStorage.removeItem(PROJECT_AUTH_TOKEN);
    toast({ description: 'Logout success', status: 'success' });
    reload();
  };

  return (
    <Flex as="header" width="full" align="center">
      <HStack justifyContent="space-between" alignItems="center" w="100%">
        <Link href={'/'}>
          <Heading size="xl">CodeDocAI</Heading>
        </Link>

        <Menu>
          <MenuButton
            as={Avatar}
            cursor="pointer"
            colorScheme="pink"
            fontSize={'sm'}
          />
          <MenuList>
            {currentUser && (
              <MenuGroup
                fontSize="20px"
                title={`Hi, ${currentUser && currentUser.name}`}
              >
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </MenuGroup>
            )}
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Header;
