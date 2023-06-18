import { Box } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Box p={4} w="100vw" h="100vh">
      {children}
    </Box>
  );
};
