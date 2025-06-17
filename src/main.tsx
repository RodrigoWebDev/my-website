import { render } from "preact";
import Router from "preact-router";
import Resume from "./pages/resume";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Works from "./pages/works";
import "./main.css";
import { updateLocaleState } from "./business/locale";
import { modalState } from "./utils/modal";
import { ResumeEdit } from "./pages/resume-edit";
import { toastState } from "./utils/toast";

const Main = () => {
  return (
    <>
      <Router
        onChange={() => {
          updateLocaleState();
        }}
      >
        <Home path="/" />
        <Projects path="/projects" />
        <Skills path="/skills" />
        <Works path="/works" />
        <Resume path="/resume" />
        <ResumeEdit path="/resume-edit" />
      </Router>

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

      {toastState.value.isOpen && (
        <div className="toast">
          <div className={`alert ${toastState.value.type}`}>
            <span>{toastState.value.text}</span>
          </div>
        </div>
      )}
    </>
  );
};

render(<Main />, document.getElementById("app")!);
