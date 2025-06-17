import Layout from "../../components/Layout";
import { IPage } from "../../model/other";
import { HomeHero } from "../../components/Hero";

const Home = (props: IPage) => {
  console.log({ props });

  return (
    <Layout>
      <HomeHero />
    </Layout>
  );
};

export default Home;
