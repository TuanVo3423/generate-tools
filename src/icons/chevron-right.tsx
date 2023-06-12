import { createIcon } from '@chakra-ui/react';

export const ChevronRight = createIcon({
  displayName: 'ChevronRight',
  viewBox: '0 0 20 20',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  path: (
    <>
      <path
        d="M8 6L12 10L8 14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
