import { route } from "preact-router";
import { signal } from "@preact/signals";
import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";

const isNavigationMenuOpen = signal(false);

const navLinks = [
  {
    name: "About",
    ptName: "Sobre",
  },
  {
    name: "Contact",
    ptName: "Contato",
  },
  {
    name: "Projects",
    ptName: "Projetos",
  },
  {
    name: "Skills",
    ptName: "Habilidades",
  },
  {
    name: "Works",
    ptName: "Trabalhos",
  },
  {
    name: "Resume",
    ptName: "Currículo",
  },
];

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
              route("/about");
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
            {navLinks.map((navLink) => {
              return (
                <>
                  <button
                    onClick={() => {
                      route("/" + navLink.name.toLocaleLowerCase());
                    }}
                  >
                    {isEnglish ? navLink.name : navLink.ptName}
                  </button>
                  &nbsp;&nbsp;
                </>
              );
            })}
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isNavigationMenuOpen.value && (
        <div class="d-f fd-c">
          {navLinks.map((navLink) => {
            return (
              <>
                <button
                  onClick={() => {
                    route("/" + navLink.name.toLocaleLowerCase());
                    isNavigationMenuOpen.value = false;
                  }}
                >
                  {isEnglish ? navLink.name : navLink.ptName}
                </button>
                <br />
              </>
            );
          })}
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
