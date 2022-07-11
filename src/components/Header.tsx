// import { styled } from "@mui/material/styles";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
// import { IconButton, Toolbar, Typography } from "@mui/material";

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }
// const drawerWidth = 250;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   backgroundColor: "white",
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Header = ({ handleDrawerOpen, open, menu }) => {
//   return (
//     <>
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: "none" }),
//             }}
//           >
//             <img src={menu} />
//           </IconButton>

//           <Typography variant="h6" noWrap component="div">
//             Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };

import AppBar from "@mui/material/AppBar";
import { Typography, Toolbar, IconButton, Box } from "@mui/material";

import { useDrawerContext } from "../context/DrawerContext";

const Header = () => {
  const { isOpened } = useDrawerContext();
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        borderBottom: "1px solid #00000013",
        padding: "0 17px",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            marginLeft: isOpened ? "250px" : "50px",
            transition: "all 200ms ease-out",
          }}
        />

        <Typography variant="h6">Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
