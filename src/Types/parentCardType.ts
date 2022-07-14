import { ReactNode } from "react";

export type parentCardType = {
  title?: string;
  Icon?: any;
  CardBody?: ReactNode;
  CardFooter?: ReactNode;
  CardContent?: ReactNode;
  isPeriod?: boolean;
  topLink?: boolean;
};
