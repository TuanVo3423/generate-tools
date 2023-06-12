import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Select: ComponentStyleConfig = {
  baseStyle: {
    field: {
      h: '50px',
      height: '50px',
      borderRadius: 'md',
    },
  },
  variants: {
    primary: {
      field: {
        bg: 'pri.50',
        color: 'coolGray.900',
        fontSize: 'md',
        h: '50px',

        _hover: {
          bg: 'pri.50',
        },

        _focus: {
          boxShadow: '0 0 0 1px #3182ce',
        },

        _focusVisible: {
          boxShadow: '0 0 0 1px #3182ce',
        },
      },

      icon: {
        color: 'coolGray.400',
      },
    },
    'in-valid': {
      field: {
        backgroundColor: 'error.50',
        border: '1px solid',
        borderColor: 'error.500',
      },

      icon: {
        color: 'coolGray.400',
      },
    },
  },
};

export default Select;
