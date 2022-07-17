import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, useMediaQuery } from "@mui/material";
import { parentCardType } from "../Types/parentCardType";
import { MultiChoice } from "../common/MultiChoice";

const period = ["this month", "this quarter", "this year"];

const MediaCard: React.FC<parentCardType> = ({
  title,
  Icon,
  CardFooter,
  CardBody,
  isPeriod,
  topLink,
  style,
}: parentCardType) => {
  const Mid = useMediaQuery("(max-width:1416px)");

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
        title={title && <Typography fontSize={"20px"}>{title}</Typography>}
        action={
          (isPeriod && <MultiChoice data={period} />) || (topLink && topLink)
        }
      />

      <CardContent sx={{ minHeight: "80px" }}>{CardBody}</CardContent>
      <CardActions sx={{ margin: "0 0 14px 12px" }}>{CardFooter}</CardActions>
    </Card>
  );
};
export default MediaCard;
