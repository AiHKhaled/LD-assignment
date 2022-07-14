import MediaCard from "./ParentCard";
import BuildIcon from "@mui/icons-material/Build";
import { Box } from "@mui/system";
import { styled, Typography } from "@mui/material";
import { CustomLink } from "../common/CustomLink";
export const Configure = () => {
  const Complete = styled("span")`
    font-size: 15px;
    display: block;
  `;
  return (
    <MediaCard
      title="Configure your shop"
      Icon={BuildIcon}
      CardBody={
        <Box display="flex" flexDirection={"column"} gap={4}>
          <Box display="flex" flexDirection={"column"}>
            <Typography fontSize="32px" sx={{ color: "#FFA26B" }}>
              <span> 45% </span>

              <Complete>Completed</Complete>
            </Typography>
          </Box>

          <Typography>
            Complete all the steps to have a complete shop to best present to
            your customers.
          </Typography>
        </Box>
      }
      CardFooter={<CustomLink hasIcon content="Complete the setup!" link="#" />}
    />
  );
};
