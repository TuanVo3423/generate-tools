import { GlobalStyleProps, mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode('text.0', 'text.100')(props),
      backgroundColor: mode('text.800', 'text.800')(props),
      // fontFamily: 'Satoshi',
      // transitionProperty: 'background-color',
      // transitionDuration: 'normal',
      lineHeight: 'base',
    },
    html: {
      fontFamily: 'Satoshi',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),

  colors: {
    gray: {
      700: '#1f2733',
    },
  },
};

export default styles;
