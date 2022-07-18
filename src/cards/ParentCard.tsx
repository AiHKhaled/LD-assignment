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
}: parentCardType) => {
  const style = {
    cardBody: { minHeight: "80px" },
    actions: { margin: "0 0 14px 12px" },
  };

  return (
    <Card
      sx={{
        padding: "4px 2px",
        minHeight: "220px",
        borderRadius: "10px",
        ...style,
      }}
      elevation={3}
    >
      <CardHeader
        avatar={Icon && <Icon />}
        title={title && <Typography fontSize="20px">{title}</Typography>}
        action={(isPeriod && <FilterMenu />) || (topLink && topLink)}
      />

      <CardContent sx={style.cardBody}>{CardBody}</CardContent>
      <CardActions sx={style.actions}>{CardFooter}</CardActions>
    </Card>
  );
};
export default MediaCard;
