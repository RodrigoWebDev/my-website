import { render } from 'preact'
import Router from 'preact-router';
import Resume from "./pages/resume"
import Home from "./pages/home"
import "./index.css"
import Contact from './pages/contact';
import Projects from './pages/projects';

const Main = () => (
  <Router>  
    <Resume path="/resume" />
    <Home path="/" />
    <Contact path="/contact" />
    <Projects path="/projects" />
  </Router>
);

render(<Main />, document.getElementById('app')!)
