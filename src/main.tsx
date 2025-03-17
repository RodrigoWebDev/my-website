import { render } from "preact";
import Router from "preact-router";
import Resume from "./pages/resume";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Works from "./pages/works";
import Redirect from "./components/Redirect";
import Modal, { IModal } from "./components/Modal";
import { signal } from "@preact/signals";
import "./styles/base.css";
import "./styles/custom.css";

export const modalState = signal<IModal>({
  isOpen: false,
  title: "",
  content: <></>,
  middle: <></>,
  footer: <></>,
});

export const setModalState = (params: IModal) => {
  modalState.value = {
    ...modalState.value,
    ...params,
  };
};

const Main = () => {
  return (
    <>
      <Router>
        <Resume path="/resume" />
        <About path="/about" />
        <Contact path="/contact" />
        <Projects path="/projects" />
        <Skills path="/skills" />
        <Works path="/works" />
        <Redirect path="/" to="/about" />
      </Router>
      <Modal {...modalState.value} />
    </>
  );
};

render(<Main />, document.getElementById("app")!);
