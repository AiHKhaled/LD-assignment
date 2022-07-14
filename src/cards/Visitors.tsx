import MediaCard from "./ParentCard";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Typography } from "@mui/material";
import { CustomLink } from "../common/CustomLink";

const Visitors = () => {
  return (
    <MediaCard
      isPeriod
      title="Visitors"
      Icon={RemoveRedEyeIcon}
      CardBody={
        <Typography fontWeight={600} fontSize="40px">
          1824
        </Typography>
      }
      CardFooter={
        <CustomLink
          link="#"
          content="Do you want more visits? Contact us!"
          hasIcon
        />
      }
    />
  );
};

export default Visitors;
