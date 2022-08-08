import { Routes, Route } from "react-router-dom";
import BusLine from "./pages/BusLine";
import Home from './pages/Home';
import ReportDelay from "./pages/ReportDelay";
import SelectBusLine from './pages/SelectBusLine';
import ViewDelay from "./pages/ViewDelay";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busLine" element={<SelectBusLine />} />
        <Route path="/bus/:id" element={<BusLine />} />
        <Route path="/report/:id" element={<ReportDelay />} />
        <Route path="/view/:id" element={<ViewDelay />} />
      </Routes>
    </div>
  );
}

export default App;