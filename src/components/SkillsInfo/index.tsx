import enSkills from "../../data/en/skills.json";
import ptSkills from "../../data/pt/skills.json";
import { isEnglish } from "../../utils/locale";
import LanguagesInfo from "../LanguagesInfo";

export const SkillsInfo = ({ itemsInRow = false }) => {
  const skills = isEnglish() ? enSkills : ptSkills;
  const mainSkills = skills.filter((item) => item.isHighLight);
  const complementarySkills = skills.filter((item) => !item.isHighLight);

  return (
    <>
      <h2 class="animate__animated animate__wobble">
        🎯 {isEnglish() ? "Main skills" : "Principais habilidades"}
      </h2>

      <hr />

      <ul
        class={`animate__animated animate__shakeX ${
          itemsInRow ? "d-f f-w" : ""
        }`}
      >
        {mainSkills.map((skill) => {
          return (
            <li class="mr-3">
              <strong>{skill.name}</strong>
            </li>
          );
        })}
      </ul>

      <h2 class="animate__animated animate__wobble">
        🤹🏻 {isEnglish() ? "Complementary skills" : "Habilidades complementares"}
      </h2>

      <hr />

      <ul
        class={`animate__animated animate__shakeX ${
          itemsInRow ? "d-f f-w" : ""
        }`}
      >
        {complementarySkills.map((skill) => {
          return <li class="mr-3">{skill.name}</li>;
        })}
      </ul>

      <LanguagesInfo />
    </>
  );
};
