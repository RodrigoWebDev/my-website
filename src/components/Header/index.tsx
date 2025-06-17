import { route } from "preact-router";
import Icon from "../Icon";
import { i18n, locale, updateLocaleSearchParam } from "../../business/locale";
import { setModalState, showDrawer } from "../../utils/modal";
import { getNavLink } from "../../utils/others";
import { TIconName } from "../../model/components";

const Header = () => {
  const NAV_LINKS = [
    {
      name: i18n("home"),
      route: "",
      icon: "houseVariant",
    },
    {
      name: i18n("projects"),
      route: "projects",
      icon: "computer",
    },
    {
      name: i18n("works"),
      route: "works",
      icon: "company",
    },
    {
      name: i18n("skills"),
      route: "skills",
      icon: "clipboardList",
    },
    {
      name: i18n("resume"),
      route: "resume",
      icon: "paperText",
    },
  ];

  const Navigation = ({ ulClass }: { ulClass: string }) => {
    return (
      <>
        <ul class={ulClass}>
          {NAV_LINKS.map((item) => {
            const iconName = item.icon as TIconName;

            return (
              <li>
                <a
                  onClick={() => {
                    showDrawer(false);
                    route("/" + getNavLink(item));
                  }}
                >
                  <Icon name={iconName} />
                  {item.name}
                </a>
              </li>
            );
          })}
          <li>
            <select
              className="focus:bg-base-100! focus-visible:bg-base-100!"
              onChange={(e) => {
                updateLocaleSearchParam(e);
              }}
              value={locale.value}
            >
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>
          </li>
        </ul>
      </>
    );
  };

  const renderMobileNav = () => {
    setModalState({
      content: <Navigation ulClass="menu bg-base-200 rounded-box w-full" />,
    });
  };

  return (
    <>
      <div class="navbar bg-base-100/90 shadow-sm sticky top-0 left-0 backdrop-blur z-10 px-4">
        <div class="navbar-start">
          <a
            class="btn btn-ghost text-xl"
            onClick={() => {
              route("/");
            }}
          >
            <Icon name="logo" size={40} />
          </a>
        </div>
        <div class="navbar-end">
          <div class="hidden lg:flex">
            <Navigation ulClass="menu menu-horizontal px-1" />
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
