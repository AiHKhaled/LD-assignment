import MediaCard from "./ParentCard";
import trustpilot from "../images/trustpilot.svg";
import { Typography } from "@mui/material";
import { CustomLink } from "../common/CustomLink";

const style = {
  background: "#000032",
  boxShadow:
    "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
  borderRadius: "10px",
  color: "white",
  thick: {
    fontWeight: 600,
  },
  positive: {
    color: "rgba(0, 196, 140, 1)",
  },
};

export const Trust = () => {
  return (
    <MediaCard
      Icon={() => (
        <img className="logo" src={trustpilot} width="120px" height="30px" />
      )}
      CardBody={
        <Typography>
          Show us your love by leaving a{" "}
          <span style={style.positive}> positive </span> review on trust pilot
          and receive the extension of
          <span style={style.thick}> 50 additional products </span>
        </Typography>
      }
      CardFooter={
        <CustomLink content="Write a review on Trustpilot" link="#" hasIcon />
      }
      style={style}
    />
  );
};
