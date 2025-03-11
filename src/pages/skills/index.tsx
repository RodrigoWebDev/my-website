import enSkills from "../../data/en/skills.json";
import ptSkills from "../../data/pt/skills.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";

const Skills = () => {
  const skills = isEnglish() ? enSkills : ptSkills;
  const mainSkills = skills.filter((item) => item.isHighLight);
  const complementarySkills = skills.filter((item) => !item.isHighLight);

  return (
    <Layout>
      <>
        <h2 class="animate__animated animate__wobble">
          🎯 {isEnglish() ? "Main skills" : "Principais habilidades"}
        </h2>

        <hr />

        <ul class="animate__animated animate__shakeX">
          {mainSkills.map((skill) => {
            return <li class="mr-3">{skill.name}</li>;
          })}
        </ul>

        <h2 class="animate__animated animate__wobble">
          🤹🏻{" "}
          {isEnglish() ? "Complementary skills" : "Habilidades complementares"}
        </h2>

        <hr />

        <ul class="animate__animated animate__shakeX">
          {complementarySkills.map((skill) => {
            return <li class="mr-3">{skill.name}</li>;
          })}
        </ul>
      </>
    </Layout>
  );
};

export default Skills;
