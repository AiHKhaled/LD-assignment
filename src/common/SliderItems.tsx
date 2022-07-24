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
  const content = {
    width: "140px",
    textAlign: "center",
    borderRadius: "10px",
    height: "160px",
    border: "1px solid rgba(0,0,0,0.5)",
    background: `url(${link}) no-repeat  center/cover`,
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb="12px"
        sx={content}
      />

      <Typography fontSize="15px">
        {firstpart} <br /> {secondpart}
      </Typography>
    </Box>
  );
};
