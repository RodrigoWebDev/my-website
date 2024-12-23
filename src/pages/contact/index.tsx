import ptProfile from "../../data/pt/profile.json";
import ptSkills from "../../data/pt/skills.json";
import ptExperiences from "../../data/pt/experiences.json";
import ptProjects from "../../data/pt/projects.json";
import ptContact from "../../data/pt/contact.json";

import enProfile from "../../data/en/profile.json";
import enSkills from "../../data/en/skills.json";
import enExperiences from "../../data/en/experiences.json";
import enProjects from "../../data/en/projects.json";
import enContact from "../../data/en/contact.json";

import { route } from "preact-router";
import Header from "../../components/Header";

const Contact = (props: any) => {
  const isEnglish = window.location.search === "?locale=en_US";
  const contact = isEnglish ? enContact : ptContact;

  return (
    <main>
      <Header />

      <h2>{isEnglish ? "Contact" : "Contato"}</h2>

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
          <strong>{isEnglish ? "Phone" : "Telefone"}:</strong> +55
          {contact.phone}
        </li>
        <li>
          <strong>Website:</strong>{" "}
          <a target="_blank" href={contact.website}>
            {contact.website}
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Contact;
