import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";
import ptContact from "../../data/pt/contact.json";
import enContact from "../../data/en/contact.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";
import avatar from "../../images/avatar.jpg";
import Icon from "../../components/Icon";
import { IPage } from "../../model";
import { Hero } from "../../components/Hero";

const About = (props: IPage) => {
  console.log({ props });
  const profile = isEnglish() ? enProfile : ptProfile;
  const contact = isEnglish() ? enContact : ptContact;

  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default About;
