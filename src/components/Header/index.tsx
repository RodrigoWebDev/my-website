import { route } from "preact-router";
import { signal } from "@preact/signals";
import ptProfile from "../../data/pt/profile.json";
import enProfile from "../../data/en/profile.json";
import { isEnglish } from "../../utils/locale";
import Icon, { TIconName } from "../Icon";
import { modalState, setModalState } from "../../main";

interface INavLink {
  name: string;
  icon: string;
  route?: string;
}

const isNavigationMenuOpen = signal(false);
const _isEnglish = signal(false);

const navLinks = [
  {
    name: "home",
    route: "",
    icon: "mdi:house-variant",
  },
  {
    name: "projects",
    icon: "mdi:computer",
  },
  {
    name: "works",
    icon: "mdi:company",
  },
  {
    name: "resume",
    icon: "mdi:paper-text",
  },
];

const Header = () => {
  const profile = _isEnglish.value ? enProfile : ptProfile;

  const localeSelect = () => {
    return (
      <select
        onChange={(e: any) => {
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

  const getNavLink = (item: INavLink) => {
    if (item.route !== undefined) {
      return item.route + window.location.search;
    }

    return item.name + window.location.search;
  };

  const renderMobileNav = () => {
    setModalState({
      content: (
        <ul class="menu bg-base-200 rounded-box">
          {navLinks.map((item) => {
            const iconName = item.icon as TIconName;

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
                  <Icon name={iconName} />
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      ),
    });
  };

  return (
    <>
      <div class="navbar bg-base-100/90 shadow-sm sticky top-0 left-0 backdrop-blur z-10">
        <div class="navbar-start">
          <a
            class="btn btn-ghost text-xl"
            onClick={() => {
              route("/");
            }}
          >
            <Icon name="fluent-emoji-flat:technologist-light" size={40} />
          </a>
        </div>
        <div class="navbar-end">
          <div class="hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
              {navLinks.map((item) => {
                const iconName = item.icon as TIconName;
                return (
                  <li>
                    <a
                      onClick={() => {
                        route("/" + getNavLink(item));
                      }}
                    >
                      <Icon name={iconName} />
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <label
            htmlFor="my-drawer"
            class="drawer-button btn btn-ghost flex lg:hidden"
            onClick={() => {
              renderMobileNav();
            }}
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
    </>
  );
};

export default Header;
