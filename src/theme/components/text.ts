import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Text: ComponentStyleConfig = {
  variants: {
    header: {
      fontWeight: 'normal',
      fontSize: 'md',
      lineHeight: '18px',
    },
    value: {
      fontWeight: 'normal',
      fontSize: '2xl',
      lineHeight: '26px',
    },
  },
};

export default Text;
