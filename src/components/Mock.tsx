import { Box, styled } from "@mui/material";
import SideBar from "../Drawer/Drawer";
import BasicGrid from "./CardsContainer";
import Header from "./Header";
import Welcome from "./Welcome";

function DashboardContent() {
  const Space = styled("div")`
    height: 52px;
  `;
  return (
    <>
      <Box display="flex">
        <Header />
        <SideBar />
        <Box display="flex" flexDirection="column" flexGrow={1}>
          <Space />
          <Welcome />
          <BasicGrid />
        </Box>
      </Box>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
