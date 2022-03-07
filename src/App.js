import { Route, Routes } from "react-router-dom";
import HomeMap from "./components/HomeMap";
import Graphs from "./components/Graphs";
import DataTable from "./components/DataTable";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeMap />} />
        <Route path="graphs" element={<Graphs />} />
        <Route path="datatable" element={<DataTable />} />
      </Routes>
    </>
  );
}

export default App;
