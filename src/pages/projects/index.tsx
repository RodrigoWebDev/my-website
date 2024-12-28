import enProjects from "../../data/en/projects.json";
import ptProjects from "../../data/pt/projects.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";
import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const filters = signal<
  {
    name: string;
    checked: boolean;
  }[]
>([]);

const filteredProjects = signal<
{
  title: string;
  link: string;
  description: string;
}[]
>([])

const Projects = (props: any) => {
  const projects = isEnglish() ? enProjects : ptProjects;

  const onChange = (index: number) => {
    const _filters = [...filters.value];
    _filters[index].checked = !_filters[index].checked;

    filters.value = _filters;
  };

  const getSkills = (str: string) => {
    return str.replace("Skills: ", "").split(" · ")
  }

  const getFilters = () => {
    let _filters: any[] = [];

    projects.forEach((item) => {
      _filters.push(getSkills(item.description));
    });

    _filters = [...new Set(_filters.flat())];

    filters.value = _filters.map((item) => ({
      name: item,
      checked: false,
    }));
  };

  useEffect(() => {
    getFilters();
  }, []);

  useEffect(() => {
    const selectedFilters = filters.value.filter((item) => item.checked).map((item) => item.name)

    if (selectedFilters.length) {
      filteredProjects.value = projects.filter((project) => {
        return getSkills(project.description).some(item => selectedFilters.includes(item))
      })
    }else{
      filteredProjects.value = [...projects]
    }
    console.log({ selectedFilters })
    console.log({ filteredProjects })
  }, [filters.value])

  return (
    <Layout>
      <h2>🚧 {isEnglish() ? "Projects" : "Projetos"}</h2>

      <hr />

      <br />
      <details>
        <summary>{isEnglish() ? "Filters" : "Filtros"}</summary>
        <ul>
          {filters.value.map((item, index) => {
            return (
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => {
                      onChange(index);
                    }}
                  />
                  {item.name}
                </label>
              </li>
            );
          })}
        </ul>
      </details>

      <ul>
        {filteredProjects.value.map((project) => (
          <li>
            <h3>
              <a href={project.link} target="_blank">
                🔗 {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Projects;
