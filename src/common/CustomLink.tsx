import { Link, styled } from "@mui/material";
import React from "react";
import Arrow from "../images/Arrow.svg";
type LinkType = {
  link?: string;
  hasIcon?: boolean;
  content?: string;
};

export const CustomLink: React.FC<LinkType> = ({
  link,
  hasIcon,
  content,
}: LinkType) => {
  const LinkFooter = styled(Link)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    fontFamily: theme.typography.fontFamily,
    color: "#21B8F9",
    textDecorationColor: "#21B8F9",
    fontSize: "15px",
    whiteSpace: "nowrap",
    "  &:hover": {
      color: "#5db8df",
    },
  }));
  const arrow = { marginLeft: "20px" };

  return (
    <>
      <LinkFooter href={link}>
        {content}
        {hasIcon && <img src={Arrow} style={arrow} />}
      </LinkFooter>
    </>
  );
};
