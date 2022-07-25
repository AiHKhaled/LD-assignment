import { Grid, Link, Paper, styled, Typography } from "@mui/material";
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
    typo: {
      color: "rgba(33, 184, 249, 1)",
      textTransform: "uppercase",
      fontWeight: "500",
      fontSize: "11px",
    },
    linkColor: {
      color: " #103B66",
      fontFamily: "noto-sans HK, sans-serif",
      fontWeight: "300",
      fontSize: "12px",
    },

    boxWidth: {
      minWidth: "355px",
    },
    secondBox: {
      display: "flex",
      flexDirection: "row",
      gap: 2,
      paddingTop: "10px",
    },
    image: {
      width: 100,
      height: 100,
    },
    thirdBox: {
      paddingTop: "8px",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      width: "225px",
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
    <Box sx={style.boxWidth}>
      <Grid container lg={12}>
        <Box sx={style.secondBox}>
          <img src={image} style={style.image} alt="news" />

          <Box sx={style.thirdBox}>
            <Typography sx={style.typo}>{title}</Typography>
            <ParagraphStyle>{description}</ParagraphStyle>
            <Link style={style.linkColor}>{publisher}</Link>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
