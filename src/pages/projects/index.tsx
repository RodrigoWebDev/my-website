import { signal } from "@preact/signals";
import "animate.css";
import { useEffect } from "preact/hooks";
import { Card } from "../../components/Card";
import Icon from "../../components/Icon";
import Layout from "../../components/Layout";
import projects from "../../data/projects.json";
import bgPattern from "../../images/abstract-pattern-design_1053-524.jpg";
import { setModalState } from "../../main";
import { IPage } from "../../model";
import { i18n } from "../../utils";

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
        <legend class="fieldset-legend">{i18n("filters")}</legend>

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
      content: <Filters />,
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
              <h1 class="mb-5 text-5xl font-bold">{i18n("projects")}</h1>
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
              {i18n("showing")} <strong>{filteredProjects.value.length}</strong>{" "}
              {i18n("of")} <strong>{projects.length}</strong>{" "}
              {i18n("projects").toLowerCase()}
            </div>

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
                  btnText={i18n("access")}
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
