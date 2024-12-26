import enProjects from "../../data/en/projects.json";
import ptProjects from "../../data/pt/projects.json";
import Layout from "../../components/Layout";

const Projects = (props: any) => {
  const isEnglish = window.location.search === "?locale=en_US";
  const projects = isEnglish ? enProjects : ptProjects;

  return (
    <Layout>
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
    </Layout>
  );
};

export default Projects;
