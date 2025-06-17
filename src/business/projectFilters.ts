import { route } from "preact-router";
import projects from "../data/projects.json";
import { signal } from "@preact/signals";
import { getSkill, getSkillsList } from "./skills";

export const filters = signal<
  {
    name: string;
    checked: boolean;
  }[]
>([]);

export const filteredProjects = signal<
  {
    title: string;
    link: string;
    description: string;
    img?: string;
  }[]
>([]);

export const updateCheckedFilters = (index: number) => {
  const _filters = [...filters.value];
  _filters[index].checked = !_filters[index].checked;

  filters.value = _filters;
};

export const getFilters = () => {
  const _filters = getSkillsList();

  filters.value = _filters.map((item) => ({
    name: item,
    checked: false,
  }));
};

export const addSelectedFiltersToSearchParam = (selectedFilters: string[]) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("filters", selectedFilters.join(","));

  route(window.location.pathname + "?" + searchParams.toString());
};

export const applyFilters = (selectedFilters: string[]) => {
  filteredProjects.value = projects.filter((project) => {
    return getSkill(project.description).some((item) =>
      selectedFilters.includes(item)
    );
  });
};

export const applyFiltersFromSearchParams = () => {
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
