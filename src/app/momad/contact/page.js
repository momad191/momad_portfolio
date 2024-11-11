import { creatContact } from "../../actions/contact";
import ContactUi from "./ContactUi";

const Contact = () => {
  return <ContactUi creatContact={creatContact} />;
};

export default Contact;
