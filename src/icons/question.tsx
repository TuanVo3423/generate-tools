import { createIcon } from '@chakra-ui/react';

export const QuestionIcon = createIcon({
  displayName: 'QuestionIcon',
  viewBox: '0 0 20 20',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  path: (
    <>
      <path
        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14.8438C10.4315 14.8438 10.7812 14.494 10.7812 14.0625C10.7812 13.631 10.4315 13.2812 10 13.2812C9.56853 13.2812 9.21875 13.631 9.21875 14.0625C9.21875 14.494 9.56853 14.8438 10 14.8438Z"
        fill="currentColor"
      />
      <path
        d="M10 11.25V10.625C10.4326 10.625 10.8556 10.4967 11.2153 10.2563C11.575 10.016 11.8554 9.67433 12.021 9.27462C12.1866 8.87491 12.2299 8.43507 12.1455 8.01074C12.0611 7.58641 11.8527 7.19663 11.5468 6.89071C11.2409 6.58478 10.8511 6.37644 10.4268 6.29203C10.0024 6.20763 9.56259 6.25095 9.16288 6.41651C8.76317 6.58208 8.42153 6.86246 8.18116 7.22219C7.94079 7.58192 7.8125 8.00485 7.8125 8.4375"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
