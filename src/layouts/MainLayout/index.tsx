import { Box } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return <Box>{children}</Box>;
};
