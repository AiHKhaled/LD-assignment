import { Link, styled } from "@mui/material";
import React from "react";
import { Arrow } from "../images/Arrow";

type LinkType = {
  link?: string;
  hasIcon?: boolean;
  content?: string;
  newColor?: string;
  iconColor?: string;
};

export const CustomLink: React.FC<LinkType> = ({
  link,
  hasIcon,
  content,
  newColor,
  iconColor,
}: LinkType) => {
  const LinkFooter = styled(Link)(({ theme }) => ({
    display: "flex",
    alignItems: "center",

    fontFamily: theme.typography.fontFamily,
    color: newColor ?? "#21B8F9",
    textDecorationColor: newColor ?? "#21B8F9",
    fontSize: "15px",
    whiteSpace: "nowrap",
    "&:hover": {
      color: "#5db8df",
    },
  }));
  const arrow = { marginLeft: "20px" };

  return (
    <>
      <LinkFooter href={link}>
        {content}
        {hasIcon && (
          <Arrow color={(iconColor && iconColor) || "#21B8F9"} style={arrow} />
        )}
      </LinkFooter>
    </>
  );
};
