import "animate.css";
import { route } from "preact-router";
import enProjects from "../../data/en/projects.json";
import ptProjects from "../../data/pt/projects.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";
import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { isOpenModal, modalContent, modalMiddle } from "../../main";
import { IPage } from "../../model";

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
    img?: string;
  }[]
>([]);

const Projects = (props: IPage) => {
  console.log({ props });
  const projects = isEnglish() ? enProjects : ptProjects;

  const onChange = (index: number) => {
    const _filters = [...filters.value];
    _filters[index].checked = !_filters[index].checked;

    filters.value = _filters;
  };

  const getSkills = (str: string) => {
    const text = str
      .replace(
        `<strong><!---->Skills:<!----></strong><span class="white-space-pre"> </span>`,
        ""
      )
      .replace("<!---->", "");
    return text.split(" · ");
  };

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
    modalMiddle.value = (
      <button
        onClick={() => {
          route("projects?showFilters", true);
          window.location.reload();
        }}
      >
        🧹 Limpar filtros
      </button>
    );

    if (window.location.search === "?showFilters") {
      isOpenModal.value = true;
    }

    getFilters();
  }, []);

  useEffect(() => {
    const selectedFilters = filters.value
      .filter((item) => item.checked)
      .map((item) => item.name);

    if (selectedFilters.length) {
      filteredProjects.value = projects.filter((project) => {
        return getSkills(project.description).some((item) =>
          selectedFilters.includes(item)
        );
      });
    } else {
      filteredProjects.value = [...projects];
    }

    modalContent.value = (
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
    );
  }, [filters.value]);

  return (
    <Layout>
      <>
        <h2 class="animate__animated animate__backInLeft">
          🚧 {isEnglish() ? "Projects" : "Projetos"}
        </h2>

        <hr />

        <br />

        <button
          onClick={() => {
            isOpenModal.value = true;
          }}
          class="animate__animated animate__heartBeat"
        >
          🌪️ {isEnglish() ? "Open filters" : "Abrir filtros"}
        </button>

        <br />
        <br />

        {isEnglish() ? (
          <span>
            Showing <strong>{filteredProjects.value.length}</strong> of{" "}
            <strong>{projects.length}</strong> projects
          </span>
        ) : (
          <span>
            Mostrando <strong>{filteredProjects.value.length}</strong> de{" "}
            <strong>{projects.length}</strong> projetos
          </span>
        )}

        <br />
        <br />
        <br />

        <ul class="animate__animated animate__bounceIn">
          {filteredProjects.value.map((project) => (
            <li>
              <h3>
                <a href={project.link} target="_blank">
                  🔗 {project.title}
                </a>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: project.description }} />
            </li>
          ))}
        </ul>
      </>
    </Layout>
  );
};

export default Projects;
