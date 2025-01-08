import { render } from "preact";
import Router from "preact-router";
import Resume from "./pages/resume";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Works from "./pages/works";
import Redirect from "./components/Redirect";
import Modal from "./components/Modal";
import { signal } from "@preact/signals";
import "./styles/base.css";
import "./styles/custom.css";

export const isOpenModal = signal(false);
export const modalContent = signal(<></>);
export const modalMiddle = signal(<></>);

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
      <Modal isOpen={isOpenModal.value} content={modalContent.value} middle={modalMiddle.value} />
    </>
  );
};

render(<Main />, document.getElementById("app")!);
