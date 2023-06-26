import { Box } from '@chakra-ui/react';
import React from 'react';
import { Header } from './components';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Box bg="#111827" p={4} minH="100vh">
      <Header />
      {children}
    </Box>
  );
};
