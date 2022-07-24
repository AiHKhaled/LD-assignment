import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardHeader, useMediaQuery } from "@mui/material";
import { parentCardType } from "../Types/parentCardType";
import { FilterMenu } from "../common/Filter";

const MediaCard: React.FC<parentCardType> = ({
  title,
  Icon,
  CardFooter,
  CardBody,
  isPeriod,
  topLink,
  style,
}: parentCardType) => {
  const styled = {
    cardBody: { minHeight: "80px" },
    actions: { margin: "0 0 14px 8px" },
    card: {
      padding: "4px 2px",
      minHeight: "220px",
      borderRadius: "10px",
      elevation: "3",
      ...style,
    },
    titleStyle: {
      fontSize: "20",
      fontWeight: "50",
    },
  };

  return (
    <Card sx={styled.card}>
      <CardHeader
        avatar={Icon && <Icon />}
        title={title && <Typography sx={styled.titleStyle}>{title}</Typography>}
        action={(isPeriod && <FilterMenu />) || (topLink && topLink)}
      />

      <CardContent sx={styled.cardBody}>{CardBody}</CardContent>
      <CardActions sx={styled.actions}>{CardFooter}</CardActions>
    </Card>
  );
};
export default MediaCard;
