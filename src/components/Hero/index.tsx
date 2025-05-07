import avatar from "../../images/avatar.jpg";
import { i18n } from "../../utils";
import Icon from "../Icon";

export const Hero = () => {
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img src={avatar} class="max-w-full w-[350px] rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold mb-4">Rodrigo Queiroz</h1>
          <h2 class="italic">{i18n("profileHeadline")}</h2>
          <p class="py-6">{i18n("profileDesc")}</p>
          <div class="flex flex-wrap">
            <a
              href="https://www.linkedin.com/in/rodrigo-queiroz-chagas"
              class="btn btn-primary mr-2 mb-2"
              target="_blank"
            >
              <Icon name="mdi:linkedin" size={24} />
              Linkedin
            </a>
            <a
              href="https://wa.me/5561998102827"
              class="btn btn-success mr-2 mb-2"
              target="_blank"
            >
              <Icon name="mdi:whatsapp" size={24} />
              Whats app
            </a>
            <a
              href="https://github.com/RodrigoWebDev"
              class="btn btn-secondary"
              target="_blank"
            >
              <Icon name="mdi:github" size={24} />
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
