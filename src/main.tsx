import { render } from "preact";
import Router from "preact-router";
import Resume from "./pages/resume";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Works from "./pages/works";
import Redirect from "./components/Redirect";
import Modal, { IModal } from "./components/Modal";
import { signal } from "@preact/signals";
import "./main.css";

export const modalState = signal<IModal>({
  isOpen: false,
  title: "",
  content: <></>,
  middle: <></>,
  footer: <></>,
});

export const locale = signal<"pt-BR" | "en">("pt-BR");

export const setModalState = (params: IModal) => {
  modalState.value = {
    ...modalState.value,
    ...params,
  };
};

export const showDrawer = (show: boolean) => {
  if (document.querySelector("#my-drawer")) {
    //@ts-ignore
    document.querySelector("#my-drawer").checked = show;
  }
};

const Main = () => {
  return (
    <>
      <Router
        onChange={() => {
          showDrawer(false);
        }}
      >
        <Resume path="/resume" />
        <Home path="/" />
        <Projects path="/projects" />
        <Skills path="/skills" />
        <Works path="/works" />
        <Redirect path="/" to="/about" />
      </Router>
      <Modal {...modalState.value} />
      <div class="drawer z-20">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <div class="menu bg-base-200 text-base-content min-h-full p-4 w-[80vw]">
            {/* Sidebar content here */}
            {modalState.value.content}
            {/* <ul class="menu bg-base-200 rounded-box">
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
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

render(<Main />, document.getElementById("app")!);
