import { createIcon } from '@chakra-ui/react';

export const UserPlusIcon = createIcon({
  displayName: 'UserPlusIcon',
  viewBox: '0 0 18 19',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  path: (
    <>
      <path
        d="M10.5 11.189V17H3C2.99977 16.0842 3.20919 15.1804 3.61222 14.358C4.01526 13.5357 4.6012 12.8164 5.32516 12.2555C6.04912 11.6946 6.89188 11.3068 7.78886 11.122C8.68585 10.9371 9.61325 10.96 10.5 11.189V11.189ZM9 10.25C6.51375 10.25 4.5 8.23625 4.5 5.75C4.5 3.26375 6.51375 1.25 9 1.25C11.4863 1.25 13.5 3.26375 13.5 5.75C13.5 8.23625 11.4863 10.25 9 10.25ZM13.5 13.25V11H15V13.25H17.25V14.75H15V17H13.5V14.75H11.25V13.25H13.5Z"
        fill="currentColor"
      />
    </>
  ),
});
