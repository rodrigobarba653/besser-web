import TwoColumnText from "../../components/TwoColumnText/TwoColumnText";
import TextImage from "../../components/TextImage/TextImage";
import ContactForm from "../../components/ContactForm/ContactForm";
import CardSection from "../../components/CardSection/CardSection";
import Footer from "../../components/Footer/Footer";

import texts from "../../text/global.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // get pubid of texts json
  const dirIDArr = texts.directorio.dirid;
  const dirFound = dirIDArr.find((item) => item.id);

  return (
    <div className="App">
      <TextImage page="directorio" section="hero" />
      <CardSection
        col="4"
        page="directorio"
        section="cardsection"
        dirFound={dirFound}
      />
      <ContactForm page="contactform" section="contact" />
      <Footer />
    </div>
  );
}

export default App;
