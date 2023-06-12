import { createIcon } from '@chakra-ui/react';

export const WaveFormIcon = createIcon({
  displayName: 'WaveFormIcon',
  viewBox: '0 0 24 24',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  path: (
    <>
      <path
        d="M2.40039 15.6004V8.40039M12.0004 21.6004V2.40039M7.20039 18.0004V6.00039M21.6004 8.40039V15.6004M16.8004 6.00039L16.8004 18.0004"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
