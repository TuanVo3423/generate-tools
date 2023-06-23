import { createIcon } from '@chakra-ui/react';

export const SparkIcon = createIcon({
  displayName: 'SparkIcon',
  viewBox: '0 0 24 24',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  path: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      ></path>
    </>
  ),
});
