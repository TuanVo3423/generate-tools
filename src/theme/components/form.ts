import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Form: ComponentStyleConfig = {
  parts: ['container', 'label'],
  baseStyle: {
    container: {},

    label: {
      color: 'red',
      fontWeight: 'bold',
    },
  },
};

export default Form;
