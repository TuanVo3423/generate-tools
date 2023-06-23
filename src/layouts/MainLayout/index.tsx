import { Box } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Box bg="#111827" p={4} w="100vw" h="100vh" minW="100vw" minH="100vh">
      {children}
    </Box>
  );
};
