import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";
import Directorio from "./pages/Directorio/Directorio";
import Publicaciones from "./pages/Publicaciones/Publicaciones";
import DirectorioDetail from "./pages/DirectorioDetail/DirectorioDetail";
import PublicacionesDetail from "./pages/PublicacionesDetail/PublicacionesDetail";
import Probono from "./pages/Probono/Probono";
import Afiliaciones from "./pages/Afiliaciones/Afiliaciones";
import Contacto from "./pages/Contacto/Contacto";

import MainNav from "./components/MainNav/MainNav";
import PreNav from "./components/PreNav/PreNav";

import "bootstrap/dist/css/bootstrap.min.css";
import AvisoPrivacidad from "./pages/AvisoPrivacidad/AvisoPrivacidad";

function App() {
  return (
    <div className="App">
      <Router>
        <PreNav />
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/directorio" element={<Directorio />} />
          <Route
            path="/directorio/:directorioId"
            element={<DirectorioDetail />}
          />
          <Route path="/publicaciones" element={<Publicaciones />} />
          <Route
            path="/publicaciones/:publicacionId"
            element={<PublicacionesDetail />}
          />
          <Route path="/probono" element={<Probono />} />
          <Route path="/afiliaciones" element={<Afiliaciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
