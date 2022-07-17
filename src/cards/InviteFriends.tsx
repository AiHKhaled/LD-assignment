import MediaCard from "./ParentCard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Typography } from "@mui/material";
import { CustomLink } from "../common/CustomLink";
export const InviteFriends = () => {
  const style = {
    color: " rgba(0, 196, 140, 1)",
    fontWeight: "700",
  };

  return (
    <MediaCard
      title="Invite friend"
      Icon={PeopleAltIcon}
      CardBody={
        <Typography>
          <span style={style}> Receive 50 products </span> by inviting a friend
          who subscribes to a plan. Your friend will receive a 30% discount
          coupon valid for any plan.
        </Typography>
      }
      CardFooter={
        <CustomLink hasIcon content="Start inviting friends!" link="#" />
      }
    />
  );
};
