import { createIcon } from '@chakra-ui/react';

export const ArrowDownIcon = createIcon({
  displayName: 'ArrowDownIcon',
  viewBox: '0 0 12 13',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  path: (
    <>
      <path
        d="M9.75 5L6 8.75L2.25 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
