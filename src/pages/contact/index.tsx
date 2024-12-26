import ptContact from "../../data/pt/contact.json";
import enContact from "../../data/en/contact.json";

import Layout from "../../components/Layout";
import Icon from "../../components/Icon";
import { isEnglish } from "../../utils/locale";

const Contact = (props: any) => {
  const contact = isEnglish() ? enContact : ptContact;

  return (
    <Layout>
      <h2>📞 {isEnglish() ? "Contact" : "Contato"}</h2>

      <hr />

      <ul>
        <li>
          <strong>E-mail:</strong>{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          <strong>Linkedin:</strong>{" "}
          <a target="_blank" href={contact.linkedin}>
            {contact.linkedin}
          </a>
        </li>
        <li>
          <strong>{isEnglish() ? "Phone" : "Telefone"}:</strong> +55
          {contact.phone}
          &nbsp; &nbsp;
          <a class="c-25d366" href={`https://wa.me/55${contact.phone}`} target="_blank">
            <Icon name="whatsApp" size={16} color="#25d366" /> Chamar no what's app
          </a>
        </li>
        <li>
          <strong>Website:</strong>{" "}
          <a target="_blank" href={contact.website}>
            {contact.website}
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default Contact;
