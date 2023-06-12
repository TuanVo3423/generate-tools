import { createIcon } from '@chakra-ui/react';

export const PlusIcon = createIcon({
  displayName: 'PlusIcon',
  viewBox: '0 0 25 24',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  path: (
    <>
      <path
        d="M12.4998 4.80078L12.4998 19.2008M19.6998 12.0008L5.2998 12.0008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
});
