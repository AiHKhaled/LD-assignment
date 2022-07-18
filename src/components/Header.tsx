import AppBar from "@mui/material/AppBar";
import {
  Typography,
  Toolbar,
  Box,
  Badge,
  Button,
  useTheme,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import { useDrawerContext } from "../context/DrawerContext";

const Header = () => {
  const theme = useTheme();
  const { isOpened } = useDrawerContext();
  const style = {
    appbar: {
      bgcolor: "#fff",
      borderBottom: "1px solid #00000013",
      padding: "0 17px",
    },
    box: {
      marginLeft: isOpened ? "250px" : "50px",
      transition: "all 200ms ease-out",
    },
    dash: { color: theme.palette.primary.dark },
    button: { padding: "0" },
  };

  return (
    <AppBar elevation={0} sx={style.appbar}>
      <Toolbar>
        <Box sx={style.box} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexGrow={1}
          flexWrap="wrap"
        >
          <Typography variant="h6" fontWeight="600" sx={style.dash}>
            Dashboard
          </Typography>
          <Badge badgeContent={2} color="secondary">
            <Button size="small" variant="text" sx={style.button}>
              <BoltIcon />
              <Typography
                fontSize="15px"
                variant="body2"
                textTransform="capitalize"
              >
                what's new
              </Typography>
            </Button>
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
