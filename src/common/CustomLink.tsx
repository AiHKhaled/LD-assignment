import { Link, styled } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";
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
    fontSize: "14px",
    whiteSpace: "nowrap",
    "  &:hover": {
      color: "#5db8df",
    },
  }));
  return (
    <>
      <LinkFooter href={link}>
        {content}
        {hasIcon && <ArrowRightAltIcon sx={{ marginLeft: "40px" }} />}
      </LinkFooter>
    </>
  );
};
