import { createIcon } from '@chakra-ui/react';

export const IssueBugIcon = createIcon({
  displayName: 'IssueBugIcon',
  viewBox: '0 0 18 18',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  path: (
    <>
      <rect width="18" height="18" rx="2.25" fill="#E5493A" />
      <circle cx="9" cy="9" r="4.5" fill="white" />
    </>
  ),
});
