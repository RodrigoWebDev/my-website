import enSkills from "../../data/en/skills.json";
import ptSkills from "../../data/pt/skills.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";

const Skills = (props: any) => {
  console.log({ props });
  const skills = isEnglish() ? enSkills : ptSkills;

  return (
    <Layout>
      <h2 class="animate__animated animate__wobble">🤹🏻 {isEnglish() ? "Skills" : "Habilidades"}</h2>

      <hr />

      <ul class="animate__animated animate__shakeX">
        {skills.map((skill) => {
          if (skill.isHighLight) {
            return (
              <li class="mr-3">
                <strong>{skill.name}</strong>
              </li>
            );
          } else {
            return <li class="mr-3">{skill.name}</li>;
          }
        })}
      </ul>
    </Layout>
  );
};

export default Skills;
