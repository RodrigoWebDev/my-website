import { signal } from "@preact/signals";
import { MAIN_SKILLS_LIVE } from "../constants/skills";
import { TResumeFormKeys } from "../model/other";

export const resumeEditFormState = signal({
  skills: MAIN_SKILLS_LIVE,
});

export const removeItem = (from: "skills", position: number) => {
  const modState = resumeEditFormState.value;
  const newFromState = modState[from].filter((_, index) => index !== position);
  modState[from] = newFromState;

  resumeEditFormState.value = { ...modState };
};

export const addItem = (from: TResumeFormKeys, data: any) => {
  const modState = resumeEditFormState.value;
  modState[from].push({
    ...data,
  });

  resumeEditFormState.value = { ...modState };
};

export const updateItem = (
  from: TResumeFormKeys,
  position: number,
  data: any
) => {
  const modState = resumeEditFormState.value;
  modState[from][position] = data;

  resumeEditFormState.value = { ...modState };
};

export const save = () => {
  const modState = resumeEditFormState.value;
  const modSkills = modState.skills.filter((item) => item.Name.length > 0);

  modState.skills = modSkills;

  resumeEditFormState.value = { ...modState };

  localStorage["RESUME"] = JSON.stringify(resumeEditFormState.value);
};
