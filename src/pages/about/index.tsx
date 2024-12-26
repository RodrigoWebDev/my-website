import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";
import Layout from "../../components/Layout";

const About = (props: any) => {
  const isEnglish = window.location.search === "?locale=en_US";
  const profile = isEnglish ? enProfile : ptProfile;

  return (
    <Layout>
      <h2>Sobre</h2>
      <hr />

      <p>{profile.about}</p>
    </Layout>
  );
};

export default About;
