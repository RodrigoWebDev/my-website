import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";

const About = (props: any) => {
  const profile = isEnglish() ? enProfile : ptProfile;

  return (
    <Layout>
      <h2>{isEnglish() ? "About" : "Sobre"}</h2>
      <hr />

      <p>{profile.about}</p>
    </Layout>
  );
};

export default About;
