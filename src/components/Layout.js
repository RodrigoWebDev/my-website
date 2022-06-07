import { h } from 'preact'
import htm from 'htm'
import Navbar from "./Navbar"
import Hero from "./Hero"
import Footer from "./Footer"

const html = htm.bind(h)

const Layout = ({children, title}) => {
  return html`
    <${Navbar} />
    <${Hero} title=${title}>
      <p>Bellow are my most relevant Front end commercial projects. You can see my open source projects <a href="https://github.com/RodrigoWebDev?tab=repositories" target="_blank">here</a></p>
    <//>
    ${children}
    <${Footer} />
  `
}

export default Layout