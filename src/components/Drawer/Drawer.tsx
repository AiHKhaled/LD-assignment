import { styled, Theme, CSSObject, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { useDrawerContext } from "../../context/DrawerContext";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { CssBaseline, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

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

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   padding: theme.spacing(0, 1),
//   //necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

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

const SideBar = () => {
  const { isOpened, toggleIsOpened } = useDrawerContext();
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <Drawer variant={"permanent"} open={isOpened}>
        <Box
          mb={4}
          display="flex"
          justifyContent={isOpened ? "space-between" : "center"}
          alignItems="center"
          p="15px 20px 0px 20px"
        >
          {isOpened && <Typography>Vitrina</Typography>}
          <IconButton
            color="inherit"
            onClick={() => toggleIsOpened(!isOpened)}
            disableRipple
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
