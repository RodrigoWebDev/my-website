import { isEnglish } from "../../utils/locale";

const Footer = () => {
  return (
    <footer class="animate__animated animate__rubberBand">
      <hr />

      <br />

      <div>
        {isEnglish() ? (
          <>
            <a
              href="https://github.com/RodrigoWebDev/my-website"
              target="_blank"
            >
              &#60;/&#62; Open source website
            </a>{" "}
            developed by{" "}
            <a href="https://github.com/RodrigoWebDev" target="_blank">
              👨‍💻 me
            </a>
          </>
        ) : (
          <>
            Website de{" "}
            <a
              href="https://github.com/RodrigoWebDev/my-website"
              target="_blank"
            >
              &#60;/&#62; código aberto
            </a>{" "}
            desenvolvido por{" "}
            <a href="https://github.com/RodrigoWebDev" target="_blank">
              👨‍💻 mim
            </a>
          </>
        )}
      </div>
      <br />
    </footer>
  );
};

export default Footer;
