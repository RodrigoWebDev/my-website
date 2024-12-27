import enSkills from "../../data/en/skills.json";
import ptSkills from "../../data/pt/skills.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";

const Skills = (props: any) => {
  console.log({ props })
  const skills = isEnglish() ? enSkills : ptSkills;

  return (
    <Layout>
      <h2>🤹🏻 {isEnglish() ? "Skills": "Habilidades"}</h2>

      <hr />

      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Skills;
