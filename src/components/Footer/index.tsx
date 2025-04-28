import { isEnglish } from "../../utils/locale";
import Icon from "../Icon";

const Footer = () => {
  return (
    <footer class="footer footer-horizontal footer-center bg-neutral text-primary-content p-10">
      <aside>
        <Icon name="technologist-light" size={40} />

        <p class="font-bold">
          Rodrigo Queiroz
          <br />
          Providing reliable software since 2017
        </p>
        <p>
          <strong>NO</strong> Copyright © {new Date().getFullYear()} -{" "}
          <strong>NOT</strong> all right reserved
        </p>
      </aside>
      <div class="flex">
        <div class="inline-grid *:[grid-area:1/1]">
          <div class="status status-success animate-ping"></div>
          <div class="status status-success"></div>
        </div>{" "}
        <a
          class="link"
          href="https://github.com/RodrigoWebDev/my-website"
          target="_blank"
        >
          &#60;/&#62; Check the code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
