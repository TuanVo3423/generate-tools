import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Radio: ComponentStyleConfig = {
  baseStyle: {
    control: {
      // width: '20px',
      // height: '20px',
      // w: '20px',
      // h: '20px',
      borderColor: 'pri.1',

      _checked: {
        bg: 'text.700',
        borderColor: 'pri.1',

        _hover: {
          bg: 'none',
          borderColor: 'pri.1',
        },

        _before: {
          content: `""`,
          display: 'inline-block',
          pos: 'relative',
          w: '8px',
          h: '8px',
          borderRadius: '50%',
          bg: 'pri.1',
        },
      },
    },
  },
};

export default Radio;
