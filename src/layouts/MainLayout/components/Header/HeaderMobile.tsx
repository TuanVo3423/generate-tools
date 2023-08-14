import { MenuIcon } from '@/icons';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IOption, routes } from './data';
import { fadeIn } from '@/motion';

export type THeaderMobile = {
  currentUser: any;
};
const HeaderMobile = ({ currentUser }: THeaderMobile) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const [optionSeleted, setOptionSeleted] = useState<IOption[]>([]);

  return (
    <HStack
      pos="relative"
      zIndex="dropdown"
      display={['flex', 'flex', 'flex', 'none']}
      p={4}
      align="center"
      justify="space-between"
      maxH="70px"
    >
      <HStack w="full" justify="space-between" spacing="32px">
        <Box h="full">
          <Image w="full" h="50px" src="/logo.png" alt="logo" />
        </Box>
        {isOpen ? (
          <Icon
            color="white"
            onClick={onClose}
            onMouseDown={(e) => e.preventDefault()}
            as={CloseIcon}
          />
        ) : (
          <Icon
            color="white"
            onClick={onOpen}
            onMouseDown={(e) => e.preventDefault()}
            as={MenuIcon}
          />
        )}
      </HStack>
      <Modal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay top="80px" />
        <ModalContent
          pos="absolute"
          top="80px"
          w="100%"
          left={0}
          border={0}
          margin={0}
        >
          <ModalBody
            p="10px 34px 24px 24px"
            w="100vw"
            border="0"
            bg="#121726"
            boxShadow="0 0 20px 10px rgba(0,0,0,.04), 0 0 30px 25px rgba(0,0,0,.04) !important"
          >
            {isOpenSubMenu ? (
              optionSeleted && (
                <>
                  <HStack
                    onClick={() => setIsOpenSubMenu(false)}
                    p="10px"
                    align="center"
                    spacing={2}
                  >
                    <ChevronLeftIcon color="#86898b" w="20px" h="20px" />
                    <Text fontSize="16px" fontWeight="600">
                      Back
                    </Text>
                  </HStack>
                  <SubMenuDropdown options={optionSeleted} />
                </>
              )
            ) : (
              <Stack spacing={4}>
                <VStack spacing={4}>
                  {routes.map((route, idx: number) => (
                    <HStack
                      key={idx}
                      py="14px"
                      w="full"
                      justify="space-between"
                      align="center"
                      onClick={() => {
                        setIsOpenSubMenu(true);
                        setOptionSeleted(route.options);
                      }}
                    >
                      <Text>{route.title}</Text>
                      <ChevronRightIcon w="24px" h="24px" />
                    </HStack>
                  ))}
                </VStack>
                <HStack>
                  {currentUser ? (
                    <Button variant="primary-v2">Log out</Button>
                  ) : (
                    <Button
                      variant="primary-v2"
                      onClick={() => router.push('/auth/sign-in')}
                      w="fit-content"
                    >
                      Sign in
                    </Button>
                  )}

                  <Button variant="secondary-v2">Build site</Button>
                </HStack>
              </Stack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

type SubMenuDropdownProps = {
  options: IOption[];
};
const SubMenuDropdown = ({ options }: SubMenuDropdownProps) => {
  const router = useRouter();
  return (
    <>
      {options.map((option, idx: number) => (
        <VStack
          key={idx}
          onClick={() => {
            router.push(option.path);
            // onClose();
          }}
          align="flex-start"
          py="7px"
        >
          <HStack
            cursor="pointer"
            _hover={{
              bg: '#374151',
            }}
            w="full"
            p="12px 16px"
            spacing="16px"
          >
            <Flex
              w="66px"
              h="66px"
              align="center"
              justify="center"
              bg="#1F2937"
              borderRadius="12px"
            >
              <Image src={option.icon} filter="invert(1)" />
            </Flex>
            <VStack align="flex-start" flex={1}>
              <Text color="white" fontWeight="700">
                {option.optionTitle}
              </Text>
              <Text color="#9CA3AF" fontWeight="400">
                {option.description}
              </Text>
            </VStack>
          </HStack>
        </VStack>
      ))}
    </>
  );
};

export default HeaderMobile;
