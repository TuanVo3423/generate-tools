import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

const Textarea: ComponentStyleConfig = {
  baseStyle: {
    field: {
      h: '50px',
      height: '50px',
      borderRadius: '6px',
    },
  },

  variants: {
    primary: {
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

    'in-valid': {
      backgroundColor: 'transparent',
      border: '1px solid',
      borderColor: 'fail',
      borderRadius: '6px',
      color: mode('text.900', 'text.50'),
    },
  },

  defaultProps: {
    variant: 'primary',
  },
};

export default Textarea;
