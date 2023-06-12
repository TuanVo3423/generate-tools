import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Modal: ComponentStyleConfig = {
  baseStyle: {
    dialog: {
      borderRadius: '14px',
      background: 'white',
    },
    header: {
      textAlign: 'center',
      boxShadow: '800',
    },
    body: {
      padding: '30px',
      // maxHeight: '600px',
      overflowX: 'auto',
    },
    overlay: {
      backdropFilter: 'blur(10px)',
      background: 'rgba(33, 32, 40, 0.5)',
    },
  },
};

export default Modal;
