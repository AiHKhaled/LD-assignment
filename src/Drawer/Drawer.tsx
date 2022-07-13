import { styled, Theme, CSSObject, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { CssBaseline, Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { drawerData } from "./DrawerData";
import { useDrawerContext } from "../context/DrawerContext";
import DrawerMenu from "./DrawerMenu";
import { useState } from "react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const handleDrawerStatus = (
  isOpened: boolean,
  toggleIsOpened: any,
  showSubnav: boolean,
  setShowSubnav: React.Dispatch<React.SetStateAction<boolean>>
) => {
  showSubnav && setShowSubnav(!showSubnav);
  toggleIsOpened(!isOpened);
};

const SideBar = () => {
  const { isOpened, toggleIsOpened } = useDrawerContext();
  const [showSubnav, setShowSubnav] = useState(false);
  const [selected, setSelected] = useState<number>(0);

  return (
    <Drawer variant={"permanent"} open={isOpened}>
      <Box
        mb={4}
        display="flex"
        justifyContent={isOpened ? "space-between" : "center"}
        alignItems="center"
        p="15px 20px 0px 20px"
      >
        {isOpened && (
          <Typography fontWeight={600} letterSpacing="5px">
            Vitrina
          </Typography>
        )}
        <IconButton
          color="inherit"
          onClick={() => toggleIsOpened(!isOpened)}
          disableRipple
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <>
        {drawerData.map(
          ({ Icon, title, subnav, badgeContent, hasBadge }, index) => {
            return (
              <div key={index} onClick={() => setSelected(index)}>
                <DrawerMenu
                  Icon={Icon}
                  title={title}
                  subnav={subnav}
                  badgeContent={badgeContent}
                  hasBadge={hasBadge}
                  showSubnav={showSubnav}
                  setShowSubnav={setShowSubnav}
                  isSelected={selected === index}
                  key={index}
                />
              </div>
            );
          }
        )}
      </>
    </Drawer>
  );
};

export default SideBar;
