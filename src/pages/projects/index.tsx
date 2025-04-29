import "animate.css";
import { route } from "preact-router";
import enProjects from "../../data/en/projects.json";
import ptProjects from "../../data/pt/projects.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";
import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { setModalState } from "../../main";
import { IPage } from "../../model";
import { Card } from "../../components/Card";
import Icon from "../../components/Icon";
import bgPattern from "../../images/abstract-pattern-design_1053-524.jpg";
import { render } from "preact";

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

  const Filters = () => {
    return (
      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box border p-4 mr-4">
        <legend class="fieldset-legend">Filtros</legend>

        {filters.value.map((item, index) => {
          return (
            <label class="label mb-2">
              <input
                type="checkbox"
                class="checkbox"
                checked={item.checked}
                onChange={() => {
                  onChange(index);
                }}
              />
              {item.name}
            </label>
          );
        })}
      </fieldset>
    );
  };

  const renderFilters = () => {
    setModalState({
      title: isEnglish() ? "🌪️ Filters" : "🌪️ Filtros",
      content: <Filters />,
      footer: (
        <div class="d-f">
          <button
            class="w-50%"
            onClick={() => {
              route("projects?showFilters", true);
              window.location.reload();
            }}
          >
            🔄 {isEnglish() ? "Reset" : "Resetar"}
          </button>
          <button
            onClick={() => {
              setModalState({
                isOpen: false,
              });
            }}
            class="w-50%"
          >
            ✅ {isEnglish() ? "Aplly" : "Aplicar"}
          </button>
        </div>
      ),
    });
  };

  useEffect(() => {
    if (window.location.search === "?showFilters") {
      setModalState({
        isOpen: true,
      });
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

    renderFilters();
  }, [filters.value]);

  return (
    <Layout>
      <>
        <div
          class="hero min-h-[60vh] mb-8"
          style={{
            backgroundImage: `url(${bgPattern})`,
          }}
        >
          <div class="hero-overlay"></div>
          <div class="hero-content text-neutral-content text-center">
            <div class="max-w-md flex flex-col items-center">
              <Icon name="mdi:computer" size={100} />
              <h1 class="mb-5 text-5xl font-bold">Projetos</h1>
              <p class="mb-5">
                Aqui você encontra projetos e sistemas que desenvolvi, bem como
                as tecnologias e habilidades usadas neles.
              </p>
            </div>
          </div>
        </div>

        <main class="block md:flex px-4">
          <aside class="hidden md:block w-full md:w-[30%]">
            <Filters />
          </aside>

          <ul class="animate__animated animate__bounceIn w-full md:w-[70%]">
            <label
              htmlFor="my-drawer"
              class="drawer-button btn btn-secondary flex md:hidden mb-4"
              onClick={() => {
                renderFilters();
              }}
            >
              Abrir filtros
            </label>
            <div class="mb-8 text-left md:text-right">
              Mostrando <strong>{filteredProjects.value.length}</strong> de{" "}
              <strong>{projects.length}</strong> projetos
            </div>
            {/* {filteredProjects.value.map((project) => (
            <li>
              <h3>
                <a href={project.link} target="_blank">
                  🔗 {project.title}
                </a>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: project.description }} />
            </li>
          ))} */}

            {filteredProjects.value.map((project) => (
              <div class="mb-4">
                <Card
                  title={project.title}
                  link={project.link}
                  description={
                    <div
                      dangerouslySetInnerHTML={{
                        __html: project.description,
                      }}
                    ></div>
                  }
                  btnText="Acessar"
                />
              </div>
            ))}
          </ul>
        </main>
      </>
    </Layout>
  );
};

export default Projects;
