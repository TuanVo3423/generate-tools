import {
  BuildingIcon,
  DesignIcon,
  DevelopmentIcon,
  DiscussFillIcon,
  DocumentIcon,
  DragDropFillIcon,
  MoonIcon,
} from '@/icons';
import { ComponentWithAs, IconProps } from '@chakra-ui/react';

export interface INavigationProps {
  href: string;
  title: string;
  icon: ComponentWithAs<'svg', IconProps>;
  feature: string;
  status: string;
  isNew?: boolean;
}

export const NAVIGATIONS: INavigationProps[] = [
  {
    href: '/dashboard/overview',
    title: 'dashboard',
    icon: BuildingIcon,
    feature: '/dashboard',
    status: 'launch',
  },
  {
    href: '/logo',
    title: 'logo',
    icon: MoonIcon,
    feature: '/logo',
    status: 'beta',
  },
  {
    href: '/sop-document',
    title: 'sop_document',
    icon: DocumentIcon,
    feature: '/sop-document',
    status: 'launch',
    isNew: true,
  },
  {
    href: '/assistant',
    title: 'assistant',
    icon: DiscussFillIcon,
    feature: '/assistant',
    status: 'beta',
  },
  {
    href: '/backlogs',
    title: 'backlogs',
    icon: DesignIcon,
    feature: '/backlogs',
    status: 'beta',
  },
  {
    href: '/user-interface',
    title: 'user_interface',
    icon: DragDropFillIcon,
    feature: '/user-interface',
    status: 'beta',
  },
  {
    href: '/coding-structure',
    title: 'coding_structure',
    icon: DevelopmentIcon,
    feature: '/coding-structure',
    status: 'beta',
  },
];
