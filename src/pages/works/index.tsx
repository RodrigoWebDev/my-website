import Layout from "../../components/Layout";
import { IPage } from "../../model";
import { ExperienceInfo } from "../../components/ExperienceInfo";

const Works = (props: IPage) => {
  console.log({ props });

  return (
    <Layout>
      <ExperienceInfo />
    </Layout>
  );
};

export default Works;
