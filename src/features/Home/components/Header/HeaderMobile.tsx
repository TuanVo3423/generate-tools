import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { MenuIcon } from '@/icons';
import { ChevronRightIcon } from '@chakra-ui/icons';
type HeaderMobileProps = {};

const HeaderMobile = (props: HeaderMobileProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack
      display={['flex', 'flex', 'flex', 'none']}
      pos="relative"
      p={4}
      align="center"
      justify="space-between"
      maxH="70px"
    >
      <HStack w="full" justify="space-between" spacing="32px">
        <Box h="full">
          <Image w="full" h="50px" src="/logo.png" />
        </Box>
      </HStack>
      <HStack>
        <Popover isOpen={isOpen} onClose={onClose} placement="bottom-start">
          <PopoverTrigger>
            <Icon
              color="white"
              onClick={onOpen}
              onMouseDown={(e) => e.preventDefault()}
              as={MenuIcon}
            />
          </PopoverTrigger>
          <PopoverContent
            mt={4}
            p="10px 34px 24px 24px"
            w="100vw"
            border="0"
            bg="#121726"
            boxShadow="0 0 20px 10px rgba(0,0,0,.04), 0 0 30px 25px rgba(0,0,0,.04) !important"
          >
            <Stack spacing={4}>
              <VStack color="white" spacing={4}>
                <HStack
                  py="14px"
                  w="full"
                  justify="space-between"
                  align="center"
                >
                  <Text>Products</Text>
                  <ChevronRightIcon w="24px" h="24px" />
                </HStack>
                <HStack
                  py="14px"
                  w="full"
                  justify="space-between"
                  align="center"
                >
                  <Text>Rescoures</Text>
                  <ChevronRightIcon w="24px" h="24px" />
                </HStack>
                <HStack
                  py="14px"
                  w="full"
                  justify="space-between"
                  align="center"
                >
                  <Text>Tools</Text>
                  <ChevronRightIcon w="24px" h="24px" />
                </HStack>
              </VStack>
              <HStack>
                <Button variant="primary-v2">Sign in</Button>
                <Button variant="secondary-v2">Build site</Button>
              </HStack>
            </Stack>
          </PopoverContent>
        </Popover>
      </HStack>
    </HStack>
  );
};

export default HeaderMobile;
