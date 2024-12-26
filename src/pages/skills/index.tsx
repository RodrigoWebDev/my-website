import enSkills from "../../data/en/skills.json";
import ptSkills from "../../data/pt/skills.json";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

const Skills = (props: any) => {
  const isEnglish = window.location.search === "?locale=en_US";
  const skills = isEnglish ? enSkills : ptSkills;

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
