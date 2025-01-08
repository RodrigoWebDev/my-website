import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";
import avatar from "../../images/avatar.jpg";

const About = (props: any) => {
  console.log({ props });

  const profile = isEnglish() ? enProfile : ptProfile;

  return (
    <Layout>
      <h2 class="animate__animated animate__backInRight">
        💭 {isEnglish() ? "About" : "Sobre"}
      </h2>
      <hr />

      <br />

      <div class="md:d-f ai-c">
        <img
          src={avatar}
          class="round m-0-auto d-b md:mr-2"
          width="150"
          alt="Rodrigo Queiroz | Frontend developer"
        />

        <p class="animate__animated animate__backInLeft">{profile.about}</p>
      </div>
    </Layout>
  );
};

export default About;
