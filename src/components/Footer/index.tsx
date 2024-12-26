import { isEnglish } from "../../utils/locale";

const Footer = () => {
  return (
    <footer>
      <hr />

      {isEnglish() ? (
        <>
          <a href="https://github.com/RodrigoWebDev/my-website" target="_blank">
            ☕ Open source website
          </a>{" "}
          developed by{" "}
          <a href="https://github.com/RodrigoWebDev" target="_blank">
            👨‍💻 me
          </a>
        </>
      ) : (
        <>
          Website de{" "}
          <a href="https://github.com/RodrigoWebDev/my-website" target="_blank">
            ☕ código aberto
          </a>{" "}
          desenvolvido por{" "}
          <a href="https://github.com/RodrigoWebDev" target="_blank">
            👨‍💻 mim
          </a>
        </>
      )}
    </footer>
  );
};

export default Footer;
