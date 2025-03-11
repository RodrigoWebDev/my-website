import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";
import ptContact from "../../data/pt/contact.json";
import enContact from "../../data/en/contact.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";
import avatar from "../../images/avatar.jpg";
import Icon from "../../components/Icon";
import { IPage } from "../../model";

const About = (props: IPage) => {
  console.log({ props });
  const profile = isEnglish() ? enProfile : ptProfile;
  const contact = isEnglish() ? enContact : ptContact;

  return (
    <Layout>
      <>
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

        <div>
          <button
            class="d-f ai-c"
            onClick={() => {
              window.open(`https://wa.me/55${contact.phone}`, "_blank");
            }}
          >
            <Icon class="mr-1" name="whatsApp" size={16} color="greenyellow" />
            {isEnglish() ? "Send a message" : "Mandar uma mensagem"}
          </button>
        </div>
      </>
    </Layout>
  );
};

export default About;
