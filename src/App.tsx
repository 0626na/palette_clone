import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  ColorsRGBAmerican,
  ColorsRGBAussie,
  ColorsRGBBritish,
  ColorsRGBCanadian,
  ColorsRGBDutch,
  ColorsRGBFlat,
  ColorsRGBFrench,
} from "./atom";
import PaletteComponent from "./Components/PaletteComponent";
import { Home } from "./Home";

function App() {
  const flat = useRecoilValue(ColorsRGBFlat);
  const america = useRecoilValue(ColorsRGBAmerican);
  const canada = useRecoilValue(ColorsRGBCanadian);
  const british = useRecoilValue(ColorsRGBBritish);
  const aussie = useRecoilValue(ColorsRGBAussie);
  const dutch = useRecoilValue(ColorsRGBDutch);
  const france = useRecoilValue(ColorsRGBFrench);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/palette/flat"
            element={<PaletteComponent ColorData={flat} />}
          />
          <Route
            path="/palette/america"
            element={<PaletteComponent ColorData={america} />}
          />
          <Route
            path="/palette/canada"
            element={<PaletteComponent ColorData={canada} />}
          />
          <Route
            path="/palette/british"
            element={<PaletteComponent ColorData={british} />}
          />
          <Route
            path="/palette/dutch"
            element={<PaletteComponent ColorData={dutch} />}
          />
          <Route
            path="/palette/aussie"
            element={<PaletteComponent ColorData={aussie} />}
          />
          <Route
            path="/palette/france"
            element={<PaletteComponent ColorData={france} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
