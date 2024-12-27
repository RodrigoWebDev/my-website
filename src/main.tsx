import { render } from 'preact'
import Router from 'preact-router';
import Resume from "./pages/resume"
import About from "./pages/about"
import "./index.css"
import Contact from './pages/contact';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Works from './pages/works';
import Redirect from './components/Redirect';

const Main = () => (
  <Router>  
    <Resume path="/resume" />
    <About path="/about"/>
    <Contact path="/contact" />
    <Projects path="/projects" />
    <Skills path="/skills" />
    <Works path="/works" />
    <Redirect path="/" to="/about" />
  </Router>
);

render(<Main />, document.getElementById('app')!)
