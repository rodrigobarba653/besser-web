import TwoColumnText from "../../components/TwoColumnText/TwoColumnText";
import TwoColumnInverted from "../../components/TwoColumnInverted/TwoColumnInverted";
import TextImage from "../../components/TextImage/TextImage";
import CardSection from "../../components/CardSection/CardSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TextImage page="nosotros" section="hero" />
      <TwoColumnText page="nosotros" section="twocolumns" />
      <CardSection col="6" page="nosotros" section="cardsection" />
      <TwoColumnInverted page="nosotros" section="twocolumnsinverted" />
      <ContactForm page="contactform" section="contact" />
      <Footer />
    </div>
  );
}

export default App;
