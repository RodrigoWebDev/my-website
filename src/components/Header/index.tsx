import { route } from "preact-router";
import { signal } from "@preact/signals";
import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";
import { isEnglish } from "../../utils/locale";
import Icon from "../Icon";

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
          console.log("🚀 ~ localeSelect ~ e:", e);
          const check = e.target?.value === "en";
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
      <div class="navbar bg-base-100/90 shadow-sm sticky top-0 left-0 backdrop-blur z-10">
        <div class="navbar-start">
          <a
            class="btn btn-ghost text-xl"
            onClick={() => {
              route("/about");
            }}
          >
            <Icon name="technologist-light" size={40} />
          </a>
        </div>
        <div class="navbar-end">
          <div class="hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
              {navLinks.map((item) => {
                return (
                  <li>
                    <a
                      onClick={() => {
                        route(
                          "/" +
                            item.name.toLocaleLowerCase() +
                            window.location.search
                        );
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              {/* <li>
                <a>Item 1</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul class="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li> */}
            </ul>
          </div>

          <label
            htmlFor="my-drawer"
            class="drawer-button btn btn-ghost flex lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </label>
        </div>
      </div>

      <div class="drawer z-20">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <ul class="menu bg-base-200 rounded-box">
              {navLinks.map((item) => {
                return (
                  <li>
                    <a
                      onClick={() => {
                        route(
                          "/" +
                            item.name.toLocaleLowerCase() +
                            window.location.search
                        );
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
