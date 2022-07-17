import { Stack, Typography } from "@mui/material";
import MediaCard from "./ParentCard";
import Iphone from "../images/Iphone.png";
import app from "../images/app.png";
import google from "../images/google.png";
import { CustomLink } from "../common/CustomLink";

export const SellProducts = () => {
  const backgroundC = {
    background: "rgba(243, 163, 92, 1)",
    color: "rgba(255, 255, 255, 1)",
    a: {
      color: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <MediaCard
      style={backgroundC}
      CardBody={
        <Stack flexDirection={"row"} justifyContent="space-between">
          <Stack gap={2}>
            <Typography
              width={"162px"}
              height="135px"
              fontSize={"22px"}
              lineHeight="27px"
            >
              Sell your products on your exclusive APP published on the stores
            </Typography>
            <CustomLink hasIcon content="Show more" />
          </Stack>
          <img src={Iphone} alt="iphone" />
        </Stack>
      }
      CardFooter={
        <Stack flexDirection={"row"} alignItems="center" gap={8}>
          <img src={google} alt="googleplay" />
          <img src={app} alt="appstore" />
        </Stack>
      }
    />
  );
};
