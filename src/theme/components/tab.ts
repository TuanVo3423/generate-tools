import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Tabs: ComponentStyleConfig = {
  baseStyle: {
    root: {
      display: 'inline-block',
    },
  },
  variants: {
    primary: {
      tablist: {
        position: 'relative',
        border: 'none',

        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '0',

          width: '100%',
          height: '1px',
          background: 'whiteAlpha.250',
        },
      },
      tab: {
        position: 'relative',
        border: 'none',
        color: 'gray.300',

        _selected: {
          color: 'primary',
          fontWeight: 'medium',

          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',

            borderRadius: '3px 3px 0 0',
            width: '100%',
            height: '3px',
            background: 'primary',
            zIndex: 1,
          },
        },
      },
    },

    secondary: {
      tablist: {
        position: 'relative',
        border: 'none',

        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '0',

          width: '100%',
          height: '1px',
          background: 'whiteAlpha.250',
        },
      },
      tab: {
        position: 'relative',
        border: 'none',
        color: 'gray.300',

        _selected: {
          color: 'secondary',
          fontWeight: 'medium',

          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',

            borderRadius: '3px 3px 0 0',
            width: '100%',
            height: '3px',
            background: 'secondary',
            zIndex: 1,
          },
        },
      },
    },
  },
};

export default Tabs;
