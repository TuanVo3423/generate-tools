import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Table: ComponentStyleConfig = {
  baseStyle: {
    td: {
      maxW: '125px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  sizes: {
    xs: {
      table: {
        tr: {
          h: '44px',
        },

        th: {
          whiteSpace: 'normal',
          maxW: '150px',
          p: '5px 0px',
          border: 'none',

          _first: {
            paddingLeft: '20px',
          },
          _last: {
            paddingRight: '20px',
          },
        },

        thead: {
          background: 'text.700',
        },
      },

      tbody: {
        tr: {
          td: {
            borderColor: 'text.500',
            _first: {
              paddingLeft: '20px',
            },
            _last: {
              paddingRight: '20px',
            },
          },

          // '&:nth-of-type(even)': {
          //   td: {
          //     bg: 'coolGray.50',
          //   },
          // },
        },
      },

      th: {
        fontWeight: 'bold',
        textTransform: 'inherit',
        fontSize: 'sm',
        color: 'text.100',
        lineHeight: '160%',
      },

      td: {
        fontSize: 'sm',
        color: 'text.300',
        lineHeight: '160%',
      },
    },
  },
  defaultProps: {
    size: 'xs',
    variant: 'unstyled',
  },
};

export default Table;
