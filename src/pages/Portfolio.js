import { h } from 'preact'
import htm from 'htm'
import Layout from "../components/Layout"
import Projects from "../components/Projects"

const html = htm.bind(h)

const Portfolio = () => {
  return html`
    <${Layout}>
      <${Projects} />
    <//>
  `
}

export default Portfolio