import TextImage from "../../components/TextImage/TextImage";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import GeneralText from "../../components/GeneralText/GeneralText";

import "bootstrap/dist/css/bootstrap.min.css";

function AvisoPrivacidad() {
  return (
    <div className="App">
      <TextImage page="avisodeprivacidad" section="hero" />
      <GeneralText page="avisodeprivacidad" section="generaltext" />
      <ContactForm page="contactform" section="contact" />
      <Footer />
    </div>
  );
}

export default AvisoPrivacidad;
