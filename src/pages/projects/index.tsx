import "animate.css";
import { useEffect } from "preact/hooks";
import { Card } from "../../components/Card";
import Icon from "../../components/Icon";
import Layout from "../../components/Layout";
import projects from "../../data/projects.json";
import { CenteredHero } from "../../components/Hero";
import { i18n } from "../../business/locale";
import {
  addSelectedFiltersToSearchParam,
  applyFilters,
  applyFiltersFromSearchParams,
  filteredProjects,
  filters,
  getFilters,
} from "../../business/projectFilters";
import { Filters } from "../../components/Filters";
import { setModalState } from "../../utils/modal";

const Projects = () => {
  const renderFilters = () => {
    setModalState({
      content: <Filters />,
    });
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
