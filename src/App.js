import { MapProvider } from "./context/MapContext";
import HomeMap from "./components/HomeMap";

function App() {
  return (
    <>
      <MapProvider>
        <HomeMap />
      </MapProvider>
    </>
  );
}

export default App;
