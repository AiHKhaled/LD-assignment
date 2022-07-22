import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";

export type NewsItemType = {
  image?: string;
  title?: string;
  description?: string;
  publisher?: string;
};

export const NewsItem: FC<NewsItemType> = ({
  image,
  title,
  description,
  publisher,
}: NewsItemType) => {
  const style = {
    color: "rgba(33, 184, 249, 1)",

    linkColor: {
      color: " rgba(16, 59, 102, 1)",
      fontWeight: "300",
    },

    boxWidth: {
      width: "370px",
    },
  };
  return (
    <Box sx={style.boxWidth}>
      <Box display="flex" flexDirection="row" gap={3} pt="10px">
        <img src={image} alt="news" width={"120px"} height="auto" />
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography style={style} fontSize="15px">
            {title}
          </Typography>
          <Typography fontSize="14px">{description}</Typography>
          <Link style={style.linkColor}>{publisher}</Link>
        </Box>
      </Box>
    </Box>
  );
};
