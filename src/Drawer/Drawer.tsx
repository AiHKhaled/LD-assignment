import { useState } from "react";

import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { drawerData } from "./DrawerData";
import { useDrawerContext } from "../context/DrawerContext";
import DrawerMenu from "./DrawerMenu";
import { MultiChoice } from "../common/MultiChoice";
import logo from "../images/logo.png";
const drawerWidth = 255;

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

export const Drawer = styled(MuiDrawer, {
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

const SideBar = () => {
  const { isOpened, toggleIsOpened } = useDrawerContext();
  const [selected, setSelected] = useState<number>(0);

  const style = {
    firstBox: {
      mb: "20px",
      ml: "5px",
      mr: "-5px",
      display: "flex",
      justifyContent: isOpened ? "space-between" : "center",
      alignItems: "center",
      p: "13px 20px 20px 10px",
    },
    divider: { m: "20px" },
    typo: { ml: "15px" },
  };

  return (
    <Drawer variant="permanent" open={isOpened}>
      <Box sx={style.firstBox}>
        {isOpened && <img src={logo} alt="logo" />}
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
          (
            {
              Icon,
              title,
              subnav,
              badgeContent,
              hasBadge,
              isDivider,
              isMenu,
              isStore,
              items,
              route,
            },
            index
          ) =>
            (isDivider && (
              <Divider key={`divid${index}`} sx={style.divider} />
            )) ||
            (isMenu && (
              <div key={`ItemMenu${index}`} onClick={() => setSelected(index)}>
                <DrawerMenu
                  Icon={Icon}
                  title={title || ""}
                  subnav={subnav}
                  badgeContent={badgeContent}
                  hasBadge={hasBadge}
                  isSelected={selected === index}
                  key={index}
                  route={route}
                />
              </div>
            )) ||
            (isStore && isOpened && (
              <div key={`storeItem${index}`}>
                <Typography sx={style.typo}>select a store</Typography>
                <MultiChoice data={items} />
              </div>
            ))
        )}
      </>
    </Drawer>
  );
};

export default SideBar;
