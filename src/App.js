import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Components from "./pages/Components";
import Charts from "./pages/Charts";
import Uifeatures from "./pages/Uifeatures";
import Element from "./pages/Element";
import Table from "./pages/Table";
import Map from "./pages/Map";
import Pages from "./pages/Pages";
import Menulevel1 from "./pages/Menulevel1";
import Slidebar from "./components/Slidebar";

function App() {
  return (
    <>
      <Slidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Components" element={<Components />} />
          <Route path="/Charts" element={<Charts />} />
          <Route path="/Uifeatures" element={<Uifeatures />} />
          <Route path="/Element" element={<Element />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/Menulevel1" element={<Menulevel1 />} />
        </Routes>
      </Slidebar>
    </>
  );
}

export default App;
