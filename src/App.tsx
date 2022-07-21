//import Dashboard from "./components/Dashboard";

import Dashboard from "./components/Mock";
import { DrawerContextProvider } from "./context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./Drawer/Drawer";
import { Box } from "@mui/system";
import { Products } from "./pages/products";
function App() {
  return (
    <div className="App">
      <DrawerContextProvider>
        <Router>
          <Box display="flex">
            <Header />
            <SideBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Products />} />
            </Routes>
          </Box>
        </Router>
      </DrawerContextProvider>
    </div>
  );
}

export default App;
