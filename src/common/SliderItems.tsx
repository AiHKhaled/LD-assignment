import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
type SliderProps = {
  firstpart?: string;
  secondpart?: string;
  link?: string;
};

export const SliderItems: React.FC<SliderProps> = ({
  firstpart,
  secondpart,
  link,
}: SliderProps) => {
  const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const content = {
    width: "140px",
    textAlign: "center",
    borderRadius: "10px",
    height: "160px",
    border: "1px solid rgba(0,0,0,0.5)",
    background: `url(${link}) no-repeat  center/cover`,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: "12px",
  };
  const typo = {
    fontSize: "15px",
  };

  return (
    <Box sx={container}>
      <Box sx={content} />

      <Typography sx={typo}>
        {firstpart} <br /> {secondpart}
      </Typography>
    </Box>
  );
};
