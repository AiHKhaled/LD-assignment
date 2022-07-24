import { Grid, Link, Paper, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import Masonry from "@mui/lab/Masonry";

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
    typo: {
      color: "rgba(33, 184, 249, 1)",
      textTransform: "uppercase",
      fontWeight: "500",
    },
    linkColor: {
      color: " #103B66",
      fontFamily: "noto-sans HK, sans-serif",
      fontWeight: "300",
      fontSize: "12px",
    },

    boxWidth: {
      width: "355px",
    },
  };

  const ParagraphStyle = styled("p")`
    font-family: "Noto Sans HK", sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-size: 15px;
    font-weight: 500;
  `;

  return (
    <Box sx={{ width: 355 }}>
      <Grid container lg={12}>
        <Box display="flex" flexDirection="row" gap={2} pt="10px">
          <img src={image} alt="news" height={100} />

          <Box display="flex" flexDirection="column" gap={1}>
            <Typography sx={style.typo} fontSize="11px">
              {title}
            </Typography>
            <ParagraphStyle>{description}</ParagraphStyle>
            <Link style={style.linkColor}>{publisher}</Link>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
