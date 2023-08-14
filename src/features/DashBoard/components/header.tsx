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
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Header = () => {
  const { reload } = useRouter();
  const route = useRouter();
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const currentUser = useAuth((state) => state.profile);

  const handleLogout = () => {
    null;
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
