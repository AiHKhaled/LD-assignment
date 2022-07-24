import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";

interface PlaceHolderText {
  text?: string;
}
// const placeholderStyling = {
//   content: {
//     marginRight: "40px",
//     fontSize: "3.3rem",
//     fontWeight: 500,
//     opacity: 0.6,
//   },
// };
const StyledBox = styled("div")`
  margin-top: 200px;
  margin-left: 200px;
  font-size: 35px;
  width: 500px;
  display: flex;
  flex-direction: row;

  gap: 20px;
`;

export const PlaceHolderText = ({ text }: PlaceHolderText) => {
  return (
    <StyledBox>
      <Typography variant="h4" width="80vw">
        {text}
      </Typography>
      <Typography variant="h4"> Coming Soon! </Typography>
    </StyledBox>
  );
};
