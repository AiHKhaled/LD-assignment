import MediaCard from "./ParentCard";
import HeadsetIcon from "@mui/icons-material/Headset";
import { Avatar, Button, Stack, styled, Typography } from "@mui/material";
export const CustomerSupport = () => {
  const CustomerButton = styled(Button)({
    textTransform: "none",
    width: "168px",
    height: "50px",
    padding: "10px 20px 10px  20px ",
    borderRadius: "6px",
    backgroundColor: "#21B8F9",
    "&:hover": {
      background: "#5db8df",
    },
  });
  const stack = {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  };
  return (
    <MediaCard
      Icon={HeadsetIcon}
      title="Customer Support"
      CardBody={
        <Stack sx={stack}>
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
