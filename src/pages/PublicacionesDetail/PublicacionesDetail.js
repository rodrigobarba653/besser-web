import { useParams } from "react-router-dom";

import TwoColumnText from "../../components/TwoColumnText/TwoColumnText";
import TextImage from "../../components/TextImage/TextImage";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import texts from "../../text/global.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const params = useParams();

  // get pubid of texts json
  const pubIDArr = texts.publicaciones.pubid;
  const pubFound = pubIDArr.find((item) => item.id === params.publicacionId);

  return (
    <div className="App">
      <TextImage page="publicaciones" section="hero" />
      <TwoColumnText page="publicaciones" section="pubid" pubFound={pubFound} />
      <ContactForm page="contactform" section="contact" />
      <Footer page="contactform" section="contact" />
    </div>
  );
}

export default App;
