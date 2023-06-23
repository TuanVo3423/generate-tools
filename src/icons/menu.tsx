import { createIcon } from '@chakra-ui/react';

export const MenuIcon = createIcon({
  displayName: 'MenuIcon',
  viewBox: '0 0 24 24',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.39999 5.69999C2.39999 5.20293 2.80294 4.79999 3.29999 4.79999H20.7C21.1971 4.79999 21.6 5.20293 21.6 5.69999C21.6 6.19704 21.1971 6.59999 20.7 6.59999H3.29999C2.80294 6.59999 2.39999 6.19704 2.39999 5.69999ZM2.39999 18.3C2.39999 17.8029 2.80294 17.4 3.29999 17.4H12.3C12.7971 17.4 13.2 17.8029 13.2 18.3C13.2 18.797 12.7971 19.2 12.3 19.2H3.29999C2.80294 19.2 2.39999 18.797 2.39999 18.3Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.39999 12C2.39999 11.5029 2.80294 11.1 3.29999 11.1H20.7C21.1971 11.1 21.6 11.5029 21.6 12C21.6 12.4971 21.1971 12.9 20.7 12.9H3.29999C2.80294 12.9 2.39999 12.4971 2.39999 12Z"
        fill="currentColor"
      ></path>
    </>
  ),
});
