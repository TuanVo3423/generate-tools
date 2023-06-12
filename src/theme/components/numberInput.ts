import type { ComponentStyleConfig } from '@chakra-ui/theme';

const NumberInput: ComponentStyleConfig = {
  baseStyle: {
    field: {
      outline: 'none',
      border: 'none',
    },
  },
  variants: {
    outline: {
      field: {
        border: '1px solid',
        borderColor: 'whiteAlpha.300',
        _hover: {
          borderColor: 'whiteAlpha.400',
        },
        _focus: {
          borderColor: 'whiteAlpha.500',
          boxShadow: 'none',
        },
      },
    },
  },
};

export default NumberInput;
