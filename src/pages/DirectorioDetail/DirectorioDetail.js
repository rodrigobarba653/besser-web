import { useParams } from "react-router-dom";

import TextImage from "../../components/TextImage/TextImage";
import ContactForm from "../../components/ContactForm/ContactForm";
import TwoColumnTextImage from "../../components/TwoColumnTextImage/TwoColumnTextImage";
import Servicios from "../../components/Servicios/Servicios";
import Footer from "../../components/Footer/Footer";

import texts from "../../text/global.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const params = useParams();

  // get pubid of texts json
  const dirIDArr = texts.directorio.dirid;
  const dirFound = dirIDArr.find((item) => item.id === params.directorioId);

  return (
    <div className="App">
      <TextImage page="directorio" section="hero" dirFound={dirFound} />
      <TwoColumnTextImage
        page="directorio"
        section="dirid"
        dirFound={dirFound}
      />
      <Servicios page="directorio" section="dirid" dirFound={dirFound} />
      <ContactForm page="contactform" section="contact" />
      <Footer />
    </div>
  );
}

export default App;
