import fontSizes from '../foundations/fontSizes';

const Accordion = {
  baseStyle: {
    container: {
      borderTopWidth: 0,
      _last: {
        borderBottomWidth: 0,
      },
    },
    button: {
      fontSize: fontSizes.sm,
      pb: '20px',

      _expanded: {
        pb: '10px',
      },

      // _hover: {
      //   bg: string,
      // },
      // _disabled: {
      //   opacity: number,
      //   cursor: string,
      // },
      // px: number,
      // py: number,
    },
    panel: {
      pt: 0,
      px: 0,
      pb: 0,
    },
    // icon: {
    //   fontSize: string,
    // },
  },
};

export default Accordion;
