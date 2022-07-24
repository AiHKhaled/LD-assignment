//import Dashboard from "./components/Dashboard";

import { DrawerContextProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./Drawer/Drawer";
import { Box } from "@mui/system";

import { Layout } from "./Layout";
function App() {
  return (
    <div className="App">
      <DrawerContextProvider>
        <Router>
          <Box display="flex">
            <Header />
            <SideBar />
            <Layout />
          </Box>
        </Router>
      </DrawerContextProvider>
    </div>
  );
}

export default App;
