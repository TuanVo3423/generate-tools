import { createIcon } from '@chakra-ui/react';

export const ArrowIcon = createIcon({
  displayName: 'ArrowIcon',
  viewBox: '0 0 24 24',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  path: (
    <>
      <path
        d="M3.75 12H20.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5.25L20.25 12L13.5 18.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
