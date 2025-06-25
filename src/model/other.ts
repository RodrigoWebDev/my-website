export interface IPage {
  path?: string;
}

export interface IRedirect extends IPage {
  to: string;
}

export interface INavLink {
  name: string;
  icon: string;
  route?: string;
}

export type TResumeFormKeys = "skills";

export interface ISkill {
  Name: string;
  YearsOfExperience: number;
}

export interface IResume {
  skills: ISkill[];
}

export const ItemTypes = {
  ITEM: "item",
};
