import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import Prenota from "./pages/Prenota";
import Epilsoft from "./pages/Epilsoft";
import AddomeSculpt from "./pages/AddomeSculpt";
import SkinLab from "./pages/SkinLab";
import GalleryPage from "./pages/GalleryPage";
import AdminMedea from "./pages/AdminMedea";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/prenota" element={<Prenota />} />
      <Route path="/epilsoft" element={<Epilsoft />} />
      <Route path="/addome-sculpt" element={<AddomeSculpt />} />
      <Route path="/skin-lab-360" element={<SkinLab />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/admin" element={<AdminMedea />} />
    </Routes>
  </BrowserRouter>
);