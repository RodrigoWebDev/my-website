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

  const splitedText = text.split(" · ");

  return splitedText;
};

export const getSkillsList = () => {
  let skills: any[] = [];

  projects.forEach((item) => {
    skills.push(getSkill(item.description));
  });

  skills = [...new Set(skills.flat())];

  return skills;
};

const skills = getSkillsList().sort();

export const getFilteredSkills = () => {
  const searchValue = skillsSearch.value;

  if (!searchValue.length) {
    return skills;
  }

  return skills.filter((item: any) => {
    return item.toLowerCase().includes(searchValue.toLowerCase());
  });
};

export const updateSearch = (e: any) => {
  skillsSearch.value = e.target?.value;
};
