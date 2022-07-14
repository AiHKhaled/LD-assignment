import { Link, styled, Typography } from "@mui/material";
import React from "react";

const Welcome = () => {
  const Styled = styled("div")`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 182px;
    width: "100%";
    padding: 40px 20px 0 40px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      #21b8f9 0%,
      rgba(33, 184, 249, 0) 132.05%
    );

    color: white;
  `;

  const Styledlink = styled("div")`
    font-size: 20px;
    color: white;
    text-decoration: none;

    > a {
      color: white;
      text-decoration: none;
      font-family: monospace;
      &:hover {
        color: #6cb4d3;
      }
    }
  `;
  return (
    <Styled>
      <Typography variant="h4">Welcome Mario</Typography>

      <Styledlink>
        <a href="#">app.vetrinalive.it/fenoh-store</a>
      </Styledlink>
    </Styled>
  );
};

export default Welcome;
