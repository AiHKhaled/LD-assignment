//import Dashboard from "./components/Dashboard";

import Dashboard from "./components/Mock";
import { DrawerContextProvider } from "./context";

function App() {
  return (
    <div className="App">
      <DrawerContextProvider>
        <Dashboard />
      </DrawerContextProvider>
    </div>
  );
}

export default App;
