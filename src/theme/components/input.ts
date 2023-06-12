import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      h: '50px',
      height: '50px',
      borderRadius: '6px',
    },
  },

  variants: {
    primary: {
      field: {
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: 'text.100',
        borderRadius: '6px',
        color: mode('text.900', 'text.50'),

        '::placeholder': {
          color: 'text.200',
        },

        _focus: {
          boxShadow: '0 0 0 1px #E0DFE2',
        },
      },
    },

    'primary-dark': {
      field: {
        backgroundColor: 'text.600',
        border: '1px solid',
        borderColor: 'text.500',
        borderRadius: '6px',
        color: 'text.50',

        '::placeholder': {
          color: 'text.300',
        },

        _focus: {
          borderColor: 'text.50',
        },
      },
    },

    'in-valid': {
      field: {
        backgroundColor: 'transparent',
        border: '1px solid',
        borderColor: 'fail',
        borderRadius: '6px',
        color: mode('text.900', 'text.50'),
      },
    },
  },

  sizes: {
    sm: {
      field: {
        height: '44px',
        borderRadius: '6px',
      },
    },

    md: {
      field: {
        height: '50px',
        borderRadius: '6px',
      },
    },
  },

  defaultProps: {
    variant: 'primary',
    size: 'sm',
  },
};

export default Input;
