import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import BusLine from "./pages/BusLine";
import Home from './pages/Home';
import ReportDelay from "./pages/ReportDelay";
import SelectBusLine from './pages/SelectBusLine';
import ViewDelay from "./pages/ViewDelay";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/busLine" element={<SelectBusLine />} />
          <Route path="/bus/:id" element={<BusLine />} />
          <Route path="/report/:id" element={<ReportDelay/>} />
          <Route path="/view/:id" element={<ViewDelay />} />
        </Routes>
      </UserContext.Provider>
  );
}

export default App;