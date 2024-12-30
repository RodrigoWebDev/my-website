import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";

const About = (props: any) => {
  console.log({ props })

  const profile = isEnglish() ? enProfile : ptProfile;

  return (
    <Layout>
      <h2 class="animate__animated animate__backInRight">💭 {isEnglish() ? "About" : "Sobre"}</h2>
      <hr />

      <p class="animate__animated animate__backInLeft">{profile.about}</p>
    </Layout>
  );
};

export default About;
