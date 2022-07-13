import { Box } from "@mui/material";
import SideBar from "../Drawer/Drawer";
import Header from "./Header";

function DashboardContent() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <SideBar />
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
