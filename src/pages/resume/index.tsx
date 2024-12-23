import profile from "../../data/profile.json";
import skills from "../../data/skills.json";
import experiences from "../../data/experiences.json";
import projects from "../../data/projects.json";
import contact from "../../data/contact.json";

const Resume = (props: any) => {
  return (
    <main>
      <h1>{profile.name}</h1>
      <p>{profile.headling}</p>
      <br />
      <h2>Contato</h2>
      <hr />

      <ul>
        <li><strong>E-mail:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
        <li><strong>Linkedin:</strong> <a target="_blank" href={contact.linkedin}>{contact.linkedin}</a></li>
        <li><strong>Telefone:</strong> +55{contact.phone}</li>
        <li><strong>Website:</strong> <a target="_blank" href={contact.website}>{contact.website}</a></li>
      </ul>

      <h2>Sobre</h2>
      <hr />
      <p
        dangerouslySetInnerHTML={{
          __html: profile.about,
        }}
      ></p>

      <h2>Habilidades</h2>
      <hr />
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>

      <h2>Experiência profissional</h2>
      <hr />
      <ul>
        {experiences.map((exp) => (
          <li>
            <h3>
              {exp.title} em{" "}
              <a href={exp.companyLink} target="_blank">
                {exp.company}
              </a>
            </h3>
            <p>
              <strong>Período</strong>: {exp.date}
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html: exp.description,
              }}
            ></p>
          </li>
        ))}
      </ul>

      <h2>Projetos</h2>
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
    </main>
  );
};

export default Resume;
