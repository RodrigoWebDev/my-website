import { route } from "preact-router";
import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";

const Header = () => {
  const isEnglish = window.location.search === "?locale=en_US";
  const profile = isEnglish ? enProfile : ptProfile;

  return (
    <>
      <header class="p-f l-0 t-0 bg-white">
        <div class="container d-f ai-c jc-sb">
          <div
            class="fs-32px c-p"
            onClick={() => {
              route("/");
            }}
          >
            🤖
          </div>

          <div>
            <button
              onClick={() => {
                route("/");
              }}
            >
              Sobre
            </button>
            &nbsp;&nbsp;
            <button
              onClick={() => {
                route("/contact");
              }}
            >
              Contato
            </button>
            &nbsp;&nbsp;
            <button
              onClick={() => {
                route("/projects");
              }}
            >
              Projetos
            </button>
            &nbsp;&nbsp;
            <button>Habilidades</button>&nbsp;&nbsp;
            <button>Experiência profissional</button>&nbsp;&nbsp;
            <button
              onClick={() => {
                route("/resume");
              }}
            >
              CV
            </button>
          </div>
        </div>
        <hr />
      </header>

      <h1>{profile.name}</h1>
      <p>
        <i>{profile.headline}</i>
      </p>
    </>
  );
};

export default Header;
