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
import { isEnglish } from "../../utils/locale";

const Resume = (props: any) => {
  console.log({ props })

  const profile = isEnglish() ? enProfile : ptProfile;
  const skills = isEnglish() ? enSkills : ptSkills;
  const experiences = isEnglish() ? enExperiences : ptExperiences;
  const projects = isEnglish() ? enProjects : ptProjects;
  const contact = isEnglish() ? enContact : ptContact;

  const getAge = () => {
    const birthDate = new Date(1997, 2, 11)
    const diff = Date.now() - birthDate.getTime();
    const year = new Date(diff).getUTCFullYear()

    return Math.abs(year - 1970)
  }

  return (
    <main>
      <h1>{profile.name}</h1>

      <p><strong>{isEnglish() ? "Profession" : "Profissão"}:</strong> {profile.headline}</p>
      <p><strong>{isEnglish() ? "Age" : "Idade"}:</strong> {getAge()} {isEnglish() ? "years old" : "anos"}</p>

      <h2>💭 {isEnglish() ? "About" : "Sobre"}</h2>
      <hr />

      <p
        dangerouslySetInnerHTML={{
          __html: profile.about,
        }}
      ></p>

      <h2>🤹🏻 {isEnglish() ? "Skills" : "Habilidades"}</h2>

      <hr />
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>

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

      <h2>🚧 {isEnglish() ? "Projects" : "Projetos"}</h2>

      <hr />

      <ul>
        {projects.map((project) => (
          <li>
            <h3>
              <a href={project.link} target="_blank">
                {project.title}
              </a>
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: project.description,
              }}
            ></p>
          </li>
        ))}
      </ul>

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
          <strong>{isEnglish() ? "Phone and What's app" : "Telefone e What's app"}:</strong> 55
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

export default Resume;
