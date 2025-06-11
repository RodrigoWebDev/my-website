import { render } from "preact";
import Router from "preact-router";
import Resume from "./pages/resume";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Works from "./pages/works";
import Modal, { IModal } from "./components/Modal";
import { signal } from "@preact/signals";
import "./main.css";
import { getSearchParam } from "./utils";

export type TLocale = "pt" | "en";

export const modalState = signal<IModal>({
  isOpen: false,
  title: "",
  content: <></>,
  middle: <></>,
  footer: <></>,
});

export const locale = signal<TLocale>("pt");

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

const setLocale = () => {
  const localeParam = getSearchParam("locale") as TLocale;

  locale.value = localeParam || "pt";
};

const Main = () => {
  return (
    <>
      <Router
        onChange={() => {
          setLocale();
        }}
      >
        <Resume path="/resume" />
        <Home path="/" />
        <Projects path="/projects" />
        <Skills path="/skills" />
        <Works path="/works" />
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
            {modalState.value.content}
          </div>
        </div>
      </div>
    </>
  );
};

render(<Main />, document.getElementById("app")!);
