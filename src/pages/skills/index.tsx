import Layout from "../../components/Layout";
import { IPage } from "../../model";
import { SkillsInfo } from "../../components/SkillsInfo";

const Skills = (props: IPage) => {
  console.log({ props });
  return (
    <Layout>
      <SkillsInfo />
    </Layout>
  );
};

export default Skills;
