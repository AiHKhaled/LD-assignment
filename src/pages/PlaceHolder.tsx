import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";

interface PlaceHolderText {
  text?: string;
  soon?: boolean;
}

const StyledBox = styled("div")`
  margin-top: 200px;
  margin-left: 200px;
  font-size: 35px;
  width: 500px;
  display: flex;
  flex-direction: row;

  gap: 20px;
`;
const typo = {
  width: "80vw",
};

export const PlaceHolderText = ({ text, soon }: PlaceHolderText) => {
  return (
    <StyledBox>
      <Typography variant="h4" sx={{ typo }}>
        {text}
      </Typography>
      <Typography variant="h4"> {soon && " Coming Soon!"} </Typography>
    </StyledBox>
  );
};
