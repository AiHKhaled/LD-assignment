import { Dispatch, SetStateAction } from "react";

export type DrawerItem = {
  title: string;
  Icon: any;
  route?: string;
  hasBadge?: boolean;
  badgeContent?: number;
  subnav?: Sub[];
  showSubnav: boolean;
  setShowSubnav: Dispatch<SetStateAction<boolean>>;
  isSelected: boolean;
};

type Sub = {
  title: string;
  route?: string;
};
