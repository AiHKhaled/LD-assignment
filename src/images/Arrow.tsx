import React from "react";
import { svgTypes } from "../Types/svgTypes";

export const Arrow: React.FC<svgTypes> = ({ color, style }: svgTypes) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style && { ...style }}
    >
      <path
        d="M4.16666 10H15.8333"
        stroke={color || "#21B8F9"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 4.16666L15.8333 9.99999L10 15.8333"
        stroke={color || "#21B8F9"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
