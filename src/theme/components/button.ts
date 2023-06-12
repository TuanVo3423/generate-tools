import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Button: ComponentStyleConfig = {
  baseStyle: {
    w: '100%',
    minW: '100px',
    borderRadius: '6px',
    fontWeight: 'bold',
    lineHeight: 1,
    display: 'flex',
    align: 'center',
  },

  variants: {
    'primary-fill': {
      bg: 'pri.1',
      background: 'pri.1',
      color: 'text.900',

      _hover: {
        bg: '#EFFEB7',
        background: '#EFFEB7',
        color: 'text.900',
      },

      _active: {
        bg: '#B1C36B',
        background: '#B1C36B',
        backdropFilter: 'blur(3px)',
      },

      _disabled: {
        bg: '#373543',
        background: '#373543',
        pointerEvents: 'none',
        color: 'text.400',
      },
    },

    'primary-ghost': {
      bg: 'transparent',
      background: 'transparent',
      color: 'pri.1',

      _hover: {
        color: '#EFFEB7',
      },

      _active: {
        color: '#B1C36B',
      },

      _disabled: {
        bg: '#373543',
        background: '#373543',
        pointerEvents: 'none',
        color: 'text.400',
      },
    },

    'primary-fill-while': {
      bg: 'pri.2',
      background: 'pri.2',
      color: 'text.900',

      _hover: {
        bg: '#C8EB6A',
        background: '#C8EB6A',
        color: 'text.900',
      },

      _active: {
        bg: '#A4DA0D',
        background: '#A4DA0D',
        backdropFilter: 'blur(3px)',
      },

      _disabled: {
        bg: 'text.50',
        background: 'text.50',
        pointerEvents: 'none',
        color: 'text.200',
      },
    },

    'primary-transparent': {
      bg: 'transparent',
      background: 'transparent',
      color: 'text.0',

      _hover: {
        bg: 'transparent',
        background: 'transparent',
        color: 'text.0',
      },

      _active: {
        bg: 'transparent',
        background: 'transparent',
        color: 'text.0',
      },

      _disabled: {
        bg: 'transparent',
        background: 'transparent',
        pointerEvents: 'none',
        color: 'text.400',
      },
    },

    'while-line': {
      bg: 'transparent',
      background: 'transparent',
      border: '1px solid #5F5D69',
      color: 'text.50',

      _hover: {
        bg: 'transparent',
        background: 'transparent',
        border: '1px solid #EFEFF0',
      },

      _active: {
        bg: '#373543',
        background: '#373543',
        border: '1px solid #EFEFF0',
        backdropFilter: 'blur(3px)',
      },

      _disabled: {
        bg: 'transparent',
        background: 'transparent',
        pointerEvents: 'none',
        border: '1px solid #5F5D69',
        color: 'text.400',
      },
    },

    'while-line-while': {
      bg: 'transparent',
      background: 'transparent',
      border: '1px solid #B7B6BB',
      color: 'text.900',

      _hover: {
        bg: 'transparent',
        background: 'transparent',
        border: '1px solid #141318',
      },

      _active: {
        bg: 'text.50',
        background: 'text.50',
        border: '1px solid #141318',
      },

      _disabled: {
        bg: 'transparent',
        background: 'transparent',
        pointerEvents: 'none',
        border: '1px solid #B7B6BB',
        color: 'text.200',
      },
    },

    'dark-fill': {
      bg: 'text.900',
      background: 'text.900',
      color: 'text.0',

      _hover: {
        bg: 'text.900',
        background: 'text.900',
        color: 'text.0',
      },

      _active: {
        bg: 'text.900',
        background: 'text.900',
        color: 'text.0',
      },

      _disabled: {
        bg: '#373543',
        background: '#373543',
        pointerEvents: 'none',
        color: 'text.400',
      },
    },
  },

  sizes: {
    sm: {
      h: '44px',
    },

    md: {
      h: '50px',
    },
  },

  // The default variant value
  defaultProps: {
    variant: 'primary-fill',
  },
};

export default Button;
