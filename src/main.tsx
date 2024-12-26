import { render } from 'preact'
import Router from 'preact-router';
import Resume from "./pages/resume"
import Home from "./pages/about"
import "./index.css"
import Contact from './pages/contact';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Works from './pages/works';

const Main = () => (
  <Router>  
    <Resume path="/resume" />
    <Home path="/about" />
    <Contact path="/contact" />
    <Projects path="/projects" />
    <Skills path="/skills" />
    <Works path="/works" />
  </Router>
);

render(<Main />, document.getElementById('app')!)
