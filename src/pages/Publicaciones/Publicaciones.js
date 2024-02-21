import { useParams } from "react-router-dom";

import TextImage from "../../components/TextImage/TextImage";
import ContactForm from "../../components/ContactForm/ContactForm";
import CardSection from "../../components/CardSection/CardSection";
import Footer from "../../components/Footer/Footer";

import texts from "../../text/global.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // get pubid of texts json
  const pubIDArr = texts.publicaciones.pubid;
  const pubFound = pubIDArr.find((item) => item.id);

  return (
    <div className="App">
      <TextImage page="publicaciones" section="hero" />
      <CardSection
        col="4"
        page="publicaciones"
        section="cardsection"
        pubFound={pubFound}
      />
      <ContactForm page="contactform" section="contact" />
      <Footer page="contactform" section="contact" />
    </div>
  );
}

export default App;
