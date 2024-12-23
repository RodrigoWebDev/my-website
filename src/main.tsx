import { render } from 'preact'
import Router from 'preact-router';
import Resume from "./pages/resume"
import "./index.css"

const Main = () => (
  <Router>  
    <Resume path="/resume" />
  </Router>
);

render(<Main />, document.getElementById('app')!)
