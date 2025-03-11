import ptProfile from "../../data/pt/profile.json";
import ptSkills from "../../data/pt/skills.json";
import ptExperiences from "../../data/pt/experiences.json";
import ptContact from "../../data/pt/contact.json";

import enProfile from "../../data/en/profile.json";
import enSkills from "../../data/en/skills.json";
import enExperiences from "../../data/en/experiences.json";
import enContact from "../../data/en/contact.json";
import { isEnglish } from "../../utils/locale";

const Resume = () => {
  const profile = isEnglish() ? enProfile : ptProfile;
  const skills = isEnglish() ? enSkills : ptSkills;
  const mainSkills = skills.filter((item) => item.isHighLight);
  const complementarySkills = skills.filter((item) => !item.isHighLight);
  const experiences = isEnglish() ? enExperiences : ptExperiences;
  const contact = isEnglish() ? enContact : ptContact;

  const getAge = () => {
    const birthDate = new Date(1997, 2, 11);
    const diff = Date.now() - birthDate.getTime();
    const year = new Date(diff).getUTCFullYear();

    return Math.abs(year - 1970);
  };

  return (
    <main>
      <h1>{profile.name}</h1>

      <p>
        <strong>{isEnglish() ? "Profession" : "Profissão"}:</strong>{" "}
        {profile.headline}
      </p>
      <p>
        <strong>{isEnglish() ? "Age" : "Idade"}:</strong> {getAge()}{" "}
        {isEnglish() ? "years old" : "anos"}
      </p>

      <h2>💭 {isEnglish() ? "About" : "Sobre"}</h2>
      <hr />

      <p
        dangerouslySetInnerHTML={{
          __html: profile.about,
        }}
      ></p>

      <br />

      <h2>🎯 {isEnglish() ? "Main skills" : "Habilidades principais"}</h2>

      <hr />
      <ul class="d-f f-w">
        {mainSkills.map((skill) => {
          if (skill.isHighLight) {
            return (
              <li class="mr-3">
                <strong>{skill.name}</strong>
              </li>
            );
          } else {
            return <li class="mr-3">{skill.name}</li>;
          }
        })}
      </ul>

      <br />

      <h2>
        🤹🏻 {isEnglish() ? "Complementary skills" : "Habilidades complementares"}
      </h2>

      <hr />
      <ul class="d-f f-w">
        {complementarySkills.map((skill) => {
          if (skill.isHighLight) {
            return (
              <li class="mr-3">
                <strong>{skill.name}</strong>
              </li>
            );
          } else {
            return <li class="mr-3">{skill.name}</li>;
          }
        })}
      </ul>

      <br />

      <h2>🛠️ {isEnglish() ? "Work experience" : "Experiência profissional"}</h2>

      <hr />
      <ul>
        {experiences.map((exp) => (
          <li>
            <h3>
              {exp.title} {isEnglish() ? "at" : "em"}{" "}
              <a href={exp.companyLink} target="_blank">
                {exp.company}
              </a>
            </h3>
            <p>
              <strong>{isEnglish() ? "Date" : "Período"}</strong>: {exp.date}
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html: exp.description,
              }}
            ></p>
          </li>
        ))}
      </ul>

      <br />

      <h2>🚧 {isEnglish() ? "Projects" : "Projetos"}</h2>

      <hr />

      <br />

      <a href="https://rqueiroz.netlify.app/projects" target="_blank">
        🔗{" "}
        {isEnglish()
          ? "See all the projects I have developed"
          : "Ver todos os projetos que desenvolvi"}
      </a>

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
          <strong>
            {isEnglish() ? "Phone and What's app" : "Telefone e What's app"}:
          </strong>{" "}
          <a href={`https://wa.me/55${contact.phone}`} target="_blank">
            💬 55
            {contact.phone}
          </a>
        </li>
        <li>
          <strong>Website:</strong>{" "}
          <a target="_blank" href={contact.website}>
            🌐 {contact.website}
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Resume;
