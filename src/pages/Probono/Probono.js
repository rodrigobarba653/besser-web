import TextImage from "../../components/TextImage/TextImage";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import GeneralText from "../../components/GeneralText/GeneralText";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TextImage page="probono" section="hero" />
      <GeneralText page="probono" section="generaltext" />
      <ContactForm page="contactform" section="contact" />
      <Footer />
    </div>
  );
}

export default App;
