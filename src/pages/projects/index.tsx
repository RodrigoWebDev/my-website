import { signal } from "@preact/signals";
import "animate.css";
import { useEffect } from "preact/hooks";
import { Card } from "../../components/Card";
import Icon from "../../components/Icon";
import Layout from "../../components/Layout";
import projects from "../../data/projects.json";
import { setModalState } from "../../main";
import { IPage } from "../../model";
import { getSkill, getSkillsList, i18n } from "../../utils";
import { route } from "preact-router";
import { CenteredHero } from "../../components/Hero";

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

  const getFilters = () => {
    const _filters = getSkillsList();

    filters.value = _filters.map((item) => ({
      name: item,
      checked: false,
    }));
  };

  const Filters = () => {
    return (
      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box border p-4 mr-4">
        <legend class="fieldset-legend">{i18n("filters")}</legend>

        <button
          class="btn btn-secondary mb-8"
          onClick={() => {
            filters.value = filters.value.map((item) => {
              return {
                ...item,
                checked: false,
              };
            });
          }}
        >
          <Icon name="filterRemove" />
          {i18n("clearFilters")}
        </button>

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

  const addSelectedFiltersToSearchParam = (selectedFilters: string[]) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("filters", selectedFilters.join(","));

    route(window.location.pathname + "?" + searchParams.toString());
  };

  const applyFilters = (selectedFilters: string[]) => {
    filteredProjects.value = projects.filter((project) => {
      return getSkill(project.description).some((item) =>
        selectedFilters.includes(item)
      );
    });
  };

  const applyFiltersFromSearchParams = () => {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has("filters")) {
      const selectedFilters = searchParams.get("filters")?.split(",") || [];

      const _filters = filters.value.map((filter) => {
        const checked = selectedFilters?.some((item) => item === filter.name);

        return {
          ...filter,
          checked,
        };
      });

      filters.value = _filters;
    }
  };

  useEffect(() => {
    getFilters();
    applyFiltersFromSearchParams();
  }, []);

  useEffect(() => {
    const selectedFilters = filters.value
      .filter((item) => item.checked)
      .map((item) => item.name);

    if (selectedFilters.length) {
      applyFilters(selectedFilters);
    } else {
      filteredProjects.value = [...projects];
    }

    addSelectedFiltersToSearchParam(selectedFilters);

    renderFilters();
  }, [filters.value]);

  return (
    <Layout>
      <>
        <CenteredHero
          title={i18n("projects")}
          icon={<Icon name="computer" size={100} />}
        />

        <main class="block md:flex px-4">
          <aside
            class="hidden md:block w-full md:w-[30%] sticky top-0 left-0"
            style={{
              height: "calc(100vh - 70px)",
              overflow: "auto",
              top: "70px",
            }}
          >
            <Filters />
          </aside>

          <ul class="animate__animated animate__bounceIn w-full md:w-[70%]">
            <div
              class="sticky md:static mb-4"
              style={{
                top: "70px",
                height: "40px",
                zIndex: 1,
              }}
            >
              <label
                htmlFor="my-drawer"
                class="drawer-button btn btn-secondary flex md:hidden"
                onClick={() => {
                  renderFilters();
                }}
              >
                <Icon name="filter" />
                {i18n("openFilters")}
              </label>
            </div>
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
                  btnText={
                    <>
                      <Icon name="link" />
                      {i18n("access")}
                    </>
                  }
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
