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
  ColorsRGBGerman,
  ColorsRGBIndian,
  ColorsRGBRussian,
  ColorsRGBSPanish,
  ColorsRGBTurkish,
} from "./atom";
import PaletteComponent from "./Components/PaletteComponent";
import { Home } from "./Routers/Home";

function App() {
  const flat = useRecoilValue(ColorsRGBFlat);
  const america = useRecoilValue(ColorsRGBAmerican);
  const canada = useRecoilValue(ColorsRGBCanadian);
  const british = useRecoilValue(ColorsRGBBritish);
  const aussie = useRecoilValue(ColorsRGBAussie);
  const dutch = useRecoilValue(ColorsRGBDutch);
  const france = useRecoilValue(ColorsRGBFrench);
  const german = useRecoilValue(ColorsRGBGerman);
  const indian = useRecoilValue(ColorsRGBIndian);
  const russian = useRecoilValue(ColorsRGBRussian);
  const spanish = useRecoilValue(ColorsRGBSPanish);
  const turkish = useRecoilValue(ColorsRGBTurkish);
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
          <Route
            path="/palette/german"
            element={<PaletteComponent ColorData={german} />}
          />
          <Route
            path="/palette/indian"
            element={<PaletteComponent ColorData={indian} />}
          />
          <Route
            path="/palette/russian"
            element={<PaletteComponent ColorData={russian} />}
          />
          <Route
            path="/palette/spanish"
            element={<PaletteComponent ColorData={spanish} />}
          />
          <Route
            path="/palette/turkish"
            element={<PaletteComponent ColorData={turkish} />}
          />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
