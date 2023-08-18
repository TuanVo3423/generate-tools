import { useGlobalLoading } from '@/store';
import { Box, Image, Progress, Stack, Text } from '@chakra-ui/react';

export const GlobalLoading = () => {
  const toggle = useGlobalLoading((state) => state.toggle);

  return (
    <Box display={toggle ? 'flex' : 'none'} pos="relative" h="100vh">
      <Stack
        position="absolute"
        w="100%"
        h="100%"
        top="0"
        left="0"
        right="0"
        bottom="0"
        justify="center"
        align="center"
        bg="white"
        spacing={5}
        zIndex="tooltip"
      >
        <Image src="/codeDocAi.png" alt="logo-gradient" w="140px" h="140px" />

        <Progress
          isIndeterminate
          w="220px"
          h="4px"
          borderRadius="30px"
          mt="44px !important"
          sx={{ div: { bg: 'primary-v2' } }}
        />

        <Stack textAlign="center">
          <Text color="white">{toggle}</Text>
        </Stack>
      </Stack>
    </Box>
  );
};
