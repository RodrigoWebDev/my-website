import { signal } from "@preact/signals";
import projects from "../data/projects.json";

const skillsSearch = signal("");

export const getSkill = (str: string) => {
  const text = str
    .replace(
      `<strong><!---->Skills:<!----></strong><span class="white-space-pre"> </span>`,
      ""
    )
    .replace("<!---->", "");
  return text.split(" · ");
};

export const getSkillsList = () => {
  let _filters: any[] = [];

  projects.forEach((item) => {
    _filters.push(getSkill(item.description));
  });

  _filters = [...new Set(_filters.flat())];

  return _filters;
};

const skills = getSkillsList().sort();

export const getFilteredSkills = () => {
  const searchValue = skillsSearch.value;

  if (!searchValue.length) {
    return skills;
  }

  return skills.filter((item) => {
    return item.toLowerCase().includes(searchValue.toLowerCase());
  });
};

export const updateSearch = (e: any) => {
  skillsSearch.value = e.target?.value;
};
