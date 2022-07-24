import AppBar from "@mui/material/AppBar";
import {
  Typography,
  Toolbar,
  Box,
  Badge,
  Button,
  useTheme,
  styled,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import { useDrawerContext } from "../context/DrawerContext";

const Header = () => {
  //const theme = useTheme();

  const Dash = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    variant: "h6",
    fontSize: "17px",

    fontWeight: "500",
  }));
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
    button: {
      padding: "0",
      color: "rgba(16, 59, 102, 1)",
      size: "small",
      variant: "text",
    },
    typo: { fontSize: "15px", variant: "body2", textTransform: "capitalize" },
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
          <Dash>Dashboard</Dash>
          <Badge badgeContent={2} color="secondary">
            <Button sx={style.button}>
              <BoltIcon />
              <Typography sx={style.typo}>what's new</Typography>
            </Button>
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
