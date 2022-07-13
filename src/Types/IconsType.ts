export type DrawerItem = {
  title: string;
  Icon: any;
  route?: string;
  hasBadge?: boolean;
  badgeContent?: number;
  subnav?: Sub[];
  isSelected: boolean;
};

type Sub = {
  title: string;
  route?: string;
};
