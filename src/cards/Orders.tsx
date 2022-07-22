import MediaCard from "./ParentCard";
import ListIcon from "@mui/icons-material/List";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { CustomLink } from "../common/CustomLink";

export const Orders = () => {
  return (
    <MediaCard
      isPeriod
      Icon={ListIcon}
      title="Orders"
      CardBody={
        <Box display="flex" flexDirection={"column"}>
          <Box display="flex" justifyContent={"space-between"} pb="20px">
            <Typography>Orders Received:</Typography>
            <Typography>156</Typography>
          </Box>
          <Box display="flex" justifyContent={"space-between"}>
            <Typography>Earnings:</Typography>
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
