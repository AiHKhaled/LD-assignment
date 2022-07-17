import MediaCard from "./ParentCard";
import HeadsetIcon from "@mui/icons-material/Headset";
import { Avatar, Button, Stack, styled, Typography } from "@mui/material";
export const CustomerSupport = () => {
  const CustomerButton = styled(Button)({
    textTransform: "none",
    padding: "10px 25px 10px  25px ",
    borderRadius: "6px",
    "&:hover": {
      background: "#5db8df",
    },
  });
  return (
    <MediaCard
      Icon={HeadsetIcon}
      title="Customer Support"
      CardBody={
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src="https://i.pravatar.cc/150?img=3" />
          <Typography>Simone is here to help you.</Typography>
        </Stack>
      }
      CardFooter={
        <CustomerButton variant="contained">Contact us</CustomerButton>
      }
    />
  );
};
