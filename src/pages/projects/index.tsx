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

    setModalState({
      title: isEnglish() ? "🌪️ Filters" : "🌪️ Filtros",
      content: (
        <ul class="pl-0">
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
      ),
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
  }, [filters.value]);

  return (
    <Layout>
      <>
        {/* <h2 class="animate__animated animate__backInLeft">
          🚧 {isEnglish() ? "Projects" : "Projetos"}
        </h2>

        <hr />

        <br />

        <button
          onClick={() => {
            setModalState({
              isOpen: true,
            });
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
        <br /> */}

        <div
          class="hero min-h-screen"
          style="background-image: url(https://img.freepik.com/free-vector/abstract-pattern-design_1053-524.jpg?t=st=1745864046~exp=1745867646~hmac=dce34c6f4157777519e9aa19ece6e9b0652fbbaadfb2f8cee8201f5a2366e6c1&w=826);"
        >
          <div class="hero-overlay"></div>
          <div class="hero-content text-neutral-content text-center">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Projetos</h1>
              <p class="mb-5">
                Aqui você encontra projetos e sistemas que desenvolvi, bem como
                as tecnologias usadas.
              </p>
              <button class="btn btn-primary">Começar</button>
            </div>
          </div>
        </div>

        <div class="block md:flex">
          <aside class="w-full md:w-[30%]">
            <ul class="menu bg-base-200 rounded-box w-full">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </aside>

          <ul class="animate__animated animate__bounceIn w-full md:w-[70%]">
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
        </div>
      </>
    </Layout>
  );
};

export default Projects;
