import { Box, styled } from "@mui/material";
import { ApiContextProvider } from "../context/ApiContext";
import CardsContainer from "./CardsContainer";
import Welcome from "./Welcome";

function DashboardContent() {
  const Space = styled("div")`
    height: 52px;
  `;
  return (
    <>
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Space />
        <Welcome />
        <ApiContextProvider>
          <CardsContainer />
        </ApiContextProvider>
      </Box>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
