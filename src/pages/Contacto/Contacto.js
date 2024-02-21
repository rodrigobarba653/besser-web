import TwoColumnText from "../../components/TwoColumnText/TwoColumnText";
import TextImage from "../../components/TextImage/TextImage";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import CardSection from "../../components/CardSection/CardSection";

function App() {
  return (
    <div className="App">
      <TextImage page="contacto" section="hero" />
      <CardSection
        col="4"
        page="contacto"
        section="cardsection"
        padding="p-2"
      />
      <ContactForm page="contactform" section="contact" />
      <Footer />
    </div>
  );
}

export default App;
