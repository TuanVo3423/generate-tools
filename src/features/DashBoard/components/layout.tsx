import { Box, Stack } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import Header from './header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      // margin="0 auto"
      // maxWidth={"container.xl"}
      color="white"
      transition="0.5s ease-out"
      backgroundColor="pri.3"
      minHeight="100vh"
      padding={['2rem 1rem', '2rem 2rem', '2rem 4rem', '2rem 6rem']}
    >
      <Stack spacing={12}>
        <Header />
        {/* marginY={22} */}
        <Box>{children}</Box>
        {/* <Footer /> */}
      </Stack>
    </Box>
  );
};

export default Layout;
