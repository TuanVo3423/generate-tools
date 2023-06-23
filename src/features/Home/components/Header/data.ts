export interface IRoute {
  title: string;
  options: Array<IOption>;
}
export interface IOption {
  optionTitle: string;
  path: string;
  description: string;
  icon: string;
}

export const routes: IRoute[] = [
  {
    title: 'Products',
    options: [
      {
        optionTitle: 'CRM',
        path: '/',
        description: 'Keep track of all your customers in one place',
        icon: '/CRM-tool.svg',
      },
    ],
  },
  {
    title: 'Resources',
    options: [
      {
        optionTitle: 'State guides',
        path: '/',
        description: 'Advice for how to build a business in your state',
        icon: '/guide-tool.svg',
      },
    ],
  },
  {
    title: 'Tools',
    options: [
      {
        optionTitle: 'Generate documentation',
        path: '/generate-document',
        description: 'AI-powered document generator to launch your business',
        icon: '/document-tool.svg',
      },
      {
        optionTitle: 'Generate Images',
        path: '/generate-music',
        description: 'AI generated images for your ideas',
        icon: '/image-tool.svg',
      },
    ],
  },
];
