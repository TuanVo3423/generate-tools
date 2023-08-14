import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Flex,
  HStack,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

type PopoverNavigationProps = {
  title?: string;
  options?: any;
};

const PopoverNavigation = ({ options, title }: PopoverNavigationProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <Popover isOpen={isOpen} onClose={onClose} placement="bottom-start">
      <PopoverTrigger>
        <HStack
          cursor="pointer"
          onMouseDown={(e) => e.preventDefault()}
          onClick={onOpen}
          spacing={1}
        >
          <Text fontSize="16px" color="white" fontWeight="600">
            {title}
          </Text>
          <ChevronDownIcon color="white" w="20px" h="20px" />
        </HStack>
      </PopoverTrigger>
      <PopoverContent
        bg="rgba(18, 24, 39, 0.85)"
        border="0"
        boxShadow="0 0 20px 10px rgba(0,0,0,.04), 0 0 30px 25px rgba(0,0,0,.04) !important"
        transform="translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
        backdropFilter="blur(8px)"
      >
        {options.map((item: any, idx: number) => (
          <VStack
            key={idx}
            onClick={() => {
              router.push(item.path);
              onClose();
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
                <Image src={item.icon} filter="invert(1)" alt="icon" />
              </Flex>
              <VStack align="flex-start" flex={1}>
                <Text color="white" fontWeight="700">
                  {item.optionTitle}
                </Text>
                <Text color="#9CA3AF" fontWeight="400">
                  {item.description}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default PopoverNavigation;
