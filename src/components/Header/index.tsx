import { route } from "preact-router";
import { signal } from "@preact/signals";
import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";
import { isEnglish } from "../../utils/locale";

const isNavigationMenuOpen = signal(false);
const _isEnglish = signal(false);

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
  const profile = _isEnglish.value ? enProfile : ptProfile;

  const localeSelect = () => {
    return (
      <select
        onChange={(e: any) => {
          const check = e.target.value === "en";
          _isEnglish.value = check;

          if (check) {
            route(window.location.pathname + "?locale=en_US");
          } else {
            route(window.location.pathname);
          }
        }}
      >
        <option value="pt" selected>
          🇧🇷
        </option>
        <option value="en">🇺🇸</option>
      </select>
    );
  };

  return (
    <>
      <header class="p-s l-0 t-0 bg-white bb px-1 animate__animated animate__backInDown zi-1px">
        <div class="container d-f ai-c jc-sb">
          <div
            class="fs-32px c-p"
            onClick={() => {
              route("/about" + window.location.search);
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
                      route(
                        "/" +
                          navLink.name.toLocaleLowerCase() +
                          window.location.search
                      );
                    }}
                  >
                    {isEnglish() ? navLink.name : navLink.ptName}
                  </button>
                  &nbsp;&nbsp;
                </>
              );
            })}
            {localeSelect()}
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
                  {isEnglish() ? navLink.name : navLink.ptName}
                </button>
                <br />
              </>
            );
          })}
          {localeSelect()}
        </div>
      )}

      <h1 class="animate__animated animate__backInUp">🧑🏻‍💻 {profile.name}</h1>
      <p class="animate__animated animate__backInRight">
        <i>{profile.headline}</i>
      </p>
    </>
  );
};

export default Header;
