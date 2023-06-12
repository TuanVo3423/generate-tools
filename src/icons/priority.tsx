import { createIcon } from '@chakra-ui/react';

export const PriorityIcon = createIcon({
  displayName: 'PriorityIcon',
  viewBox: '0 0 20 20',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  path: (
    <>
      <g clipPath="url(#clip0_820_22026)">
        <path
          d="M15.0928 0L19.1668 -1.78083e-07L19.1668 20L15.0928 20L15.0928 0Z"
          fill="currentColor"
        />
        <path
          d="M7.96289 5.41667L12.037 5.41667L12.037 20L7.96289 20L7.96289 5.41667Z"
          fill="currentColor"
        />
        <path
          d="M0.833496 10.5263L4.90757 10.5263L4.90757 20L0.833496 20L0.833496 10.5263Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_820_22026">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </>
  ),
});
