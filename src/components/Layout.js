import { h } from 'preact'
import htm from 'htm'
import Navbar from "./Navbar"
import Hero from "./Hero"
import Footer from "./Footer"

const html = htm.bind(h)

const Layout = ({children, title}) => {
  return html`
    <${Navbar} />
    <${Hero} title=${title} />
    ${children}
    <${Footer} />
  `
}

export default Layout