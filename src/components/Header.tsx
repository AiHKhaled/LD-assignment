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
  return (
    <AppBar
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexGrow={1}
          flexWrap="wrap"
        >
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ color: theme.palette.primary.dark }}
          >
            Dashboard
          </Typography>
          <Badge badgeContent={2} color="secondary">
            <Button size="small" variant="text" sx={{ padding: "0" }}>
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
