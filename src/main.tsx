import { render } from "preact";
import Router, { Route } from "preact-router";
import { updateLocaleState } from "./business/locale";
import "./main.css";
import { CopyPastePage } from "./pages/copy-paste";
import { Debug } from "./pages/debug";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import { ResumeEdit } from "./pages/resume-edit";
import Skills from "./pages/skills";
import Works from "./pages/works";
import { modalState } from "./utils/modal";
import { toastState } from "./utils/toast";

const Main = () => {
  /* useEffect(() => {
    //===== TO DO ======
    window.addEventListener("click", (e: any) => {
      console.log(
        `Página: ${window.location.href}, Ação: Clicou no elemento`,
        e.target.outerHTML.slice(0, 300)
      );
    });

    window.addEventListener(
      "keyup",
      (e) => {
        console.log(
          `Página: ${window.location.href}, Ação: Digitou`,
          `${e.key}`
        );
      },
      false
    );
  }, []); */

  return (
    <>
      <Router
        onChange={() => {
          updateLocaleState();
        }}
      >
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/works" component={Works} />
        <Route path="/resume" component={Resume} />
        <Route path="/resume-edit" component={ResumeEdit} />
        <Route path="/debug" component={Debug} />
        <Route path="/copy-paste" component={CopyPastePage} />
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
