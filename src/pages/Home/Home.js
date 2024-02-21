import Hero from "../../components/Hero/Hero";
import TwoColumnText from "../../components/TwoColumnText/TwoColumnText";
import CardSection from "../../components/CardSection/CardSection";
import TextImage from "../../components/TextImage/TextImage";
import Logos from "../../components/Logos/Logos";
import Extra from "../../components/Extra/Extra";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <TwoColumnText page="homepage" section="nosotros" />
      <CardSection page="homepage" section="servicios" col="4" />
      <TextImage page="homepage" section="brochure" />
      <Logos page="homepage" section="alianza" />
      <Extra page="homepage" section="extra" />
      <ContactForm page="contactform" section="contact" />
      <Footer />
    </div>
  );
}

export default App;
