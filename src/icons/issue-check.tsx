import { createIcon } from '@chakra-ui/react';

export const IssueCheckIcon = createIcon({
  displayName: 'IssueCheckIcon',
  viewBox: '0 0 18 18',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  path: (
    <>
      <rect width="18" height="18" rx="2.25" fill="#2AA1E9" />
      <path
        d="M13.0832 5.5L6.99261 12.5L4.9165 10.1139"
        stroke="white"
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
