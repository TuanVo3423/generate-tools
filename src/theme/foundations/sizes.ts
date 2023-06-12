export const sidebarWidth = '238px';

export const topBarHeight = '50px';

const sizes = {
  max: 'max-content',
  min: 'min-content',
  full: '100%',
  '3xs': '14rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  '8xl': '90rem',
  sidebar: {
    width: sidebarWidth,
  },
  content: {
    width: `calc(100% - ${sidebarWidth})`,
    maxW: `calc(1440px - ${sidebarWidth} - 60px)`,
    height: `calc(100vh - ${topBarHeight} - 30px)`,
  },
  topBar: {
    height: topBarHeight,
  },
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export default sizes;
