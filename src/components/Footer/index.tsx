//import { isEnglish } from "../../utils/locale";
import { i18n } from "../../utils";
import Icon from "../Icon";

const Footer = () => {
  return (
    <footer class="footer footer-horizontal footer-center bg-neutral text-primary-content p-10">
      <aside>
        <Icon name="fluent-emoji-flat:technologist-light" size={40} />

        <p class="font-bold">
          Rodrigo Queiroz
          <br />
          {i18n("footerDescOne")}
        </p>
        <p>
          <strong>{i18n("footerNo")}</strong> {i18n("footerCopyright")} ©{" "}
          {new Date().getFullYear()} - <strong>{i18n("footerNo")}</strong>{" "}
          {i18n("footerRightsReserved")}
        </p>
      </aside>
      <div class="flex">
        <div class="inline-grid *:[grid-area:1/1]">
          <div class="status status-success animate-ping"></div>
          <div class="status status-success"></div>
        </div>{" "}
        <a
          class="link flex items-center"
          href="https://github.com/RodrigoWebDev/my-website"
          target="_blank"
        >
          <Icon name="mdi:github" class="mr-2" /> {i18n("seeSourceCode")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
