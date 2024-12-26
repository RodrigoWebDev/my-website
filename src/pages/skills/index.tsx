import enSkills from "../../data/en/skills.json";
import ptSkills from "../../data/pt/skills.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";

const Skills = (props: any) => {
  const skills = isEnglish() ? enSkills : ptSkills;

  return (
    <Layout>
      <h2>Habilidades</h2>
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
