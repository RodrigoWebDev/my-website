import { route } from "preact-router";
import { signal } from "@preact/signals";
import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";

const isNavigationMenuOpen = signal(false);

const Header = () => {
  const isEnglish = window.location.search === "?locale=en_US";
  const profile = isEnglish ? enProfile : ptProfile;

  return (
    <>
      <header class="p-s l-0 t-0 bg-white bb px-1">
        <div class="container d-f ai-c jc-sb">
          <div
            class="fs-32px c-p"
            onClick={() => {
              route("/");
            }}
          >
            🤖
          </div>

          <div
            class="d-b c-p md:d-n fs-32px"
            onClick={() => {
              isNavigationMenuOpen.value = !isNavigationMenuOpen.value;
            }}
          >
            ☰
          </div>

          {/* Desktop menu */}
          <div class="d-n md:d-b">
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
      </header>

      {/* Mobile menu */}
      {isNavigationMenuOpen.value && (
        <div class="d-f fd-c">
          <button
            onClick={() => {
              route("/");
              isNavigationMenuOpen.value = false;
            }}
          >
            Sobre
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => {
              route("/contact");
              isNavigationMenuOpen.value = false;
            }}
          >
            Contato
          </button>
          &nbsp;&nbsp;
          <button
            onClick={() => {
              route("/projects");
              isNavigationMenuOpen.value = false;
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
              isNavigationMenuOpen.value = false;
            }}
          >
            CV
          </button>
        </div>
      )}

      <h1>{profile.name}</h1>
      <p>
        <i>{profile.headline}</i>
      </p>
    </>
  );
};

export default Header;
