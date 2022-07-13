import { Box, styled } from "@mui/material";
import SideBar from "../Drawer/Drawer";
import Header from "./Header";
import Welcome from "./Welcome";

function DashboardContent() {
  const Space = styled("div")`
    height: 52px;
  `;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Header />
        <SideBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            backgroundColor: "red",
          }}
        >
          <Space />
          <Welcome />
        </Box>
      </Box>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
