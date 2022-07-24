import MediaCard from "./ParentCard";
import ListIcon from "@mui/icons-material/List";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { CustomLink } from "../common/CustomLink";

export const Orders = () => {
  const first = {
    display: "flex",
    flexDirection: "column",
  };
  const second = {
    display: "flex",
    justifyContent: "space-between",
    pb: "20px",
  };
  const third = {
    display: "flex",
    justifyContent: "space-between",
  };
  const typoColor = {
    color: "#6C7C8C",
  };
  return (
    <MediaCard
      isPeriod
      Icon={ListIcon}
      title="Orders"
      CardBody={
        <Box sx={first}>
          <Box sx={second}>
            <Typography sx={typoColor}>Orders Received:</Typography>
            <Typography>156</Typography>
          </Box>
          <Box sx={third}>
            <Typography sx={typoColor}>Earnings:</Typography>
            <Typography>€ 1893,24</Typography>
          </Box>
        </Box>
      }
      CardFooter={
        <CustomLink content="10 free tips to increase your sales" link="#" />
      }
    />
  );
};
