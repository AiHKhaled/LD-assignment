import { Box, styled } from "@mui/material";
import { ApiContextProvider } from "../context/ApiContext";
import SideBar from "../Drawer/Drawer";
import CardsContainer from "./CardsContainer";
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
          <ApiContextProvider>
            <CardsContainer />
          </ApiContextProvider>
        </Box>
      </Box>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
