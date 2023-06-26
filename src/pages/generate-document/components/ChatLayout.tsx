import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ChatLayoutProps = {
  children: ReactNode;
};

const ChatLayout = ({ children }: ChatLayoutProps) => {
  return (
    <Box bg="#111827" p={4} w="100vw" h="100vh" minW="100vw" minH="100vh">
      {children}
    </Box>
  );
};
export default ChatLayout;
