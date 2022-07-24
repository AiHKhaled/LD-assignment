import { Box, Stack, Typography } from "@mui/material";
import MediaCard from "./ParentCard";
import Iphone from "../images/Iphone.png";
import app from "../images/app.png";
import google from "../images/google.png";
import { CustomLink } from "../common/CustomLink";

export const SellProducts = () => {
  const backgroundC = {
    boxShadow:
      "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
    background: "#F3A35C",
    height: "349px",
    color: "rgba(255, 255, 255, 1)",
  };
  const box = {
    maxWidth: "450px",
    margin: "auto",
    marginTop: "-20px",
  };
  const stacks = {
    stackOne: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      pb: "5",
    },
    stackTwo: {
      gap: "2",
    },
  };
  const typo = {
    width: "162px",
    fontSize: "22px",
    fontWeight: "500",
  };
  const images = {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "25px",
    },
    iphoneImg: {
      width: "105.23",
      height: "226.19",
    },
    googleImg: {
      width: "123.81px",
      height: "38.25px",
    },

    iosImg: { width: "141px", height: "40px" },
  };
  return (
    <MediaCard
      style={backgroundC}
      CardBody={
        <Box style={box}>
          <Stack sx={stacks.stackOne}>
            <Stack sx={stacks.stackTwo}>
              <Typography sx={typo}>
                Sell your products on your exclusive APP published on the stores
              </Typography>
              <CustomLink
                hasIcon
                iconColor="#ffff"
                newColor="#ffff"
                content="Show more"
              />
            </Stack>
            <img src={Iphone} alt="iphone" style={images.iphoneImg} />
          </Stack>
          <Stack sx={images.container}>
            <img src={google} alt="googleplay" style={images.googleImg} />
            <img src={app} alt="appstore" style={images.iosImg} />
          </Stack>
        </Box>
      }
    />
  );
};
