import { h } from 'preact'
import htm from 'htm'
import Navbar from "../Navbar"
import Hero from "../Hero"
import Footer from "../Footer"

const html = htm.bind(h)

interface LayoutPropTypes {
  children: any
  title: string
}

const Layout = ({children}: LayoutPropTypes) => {
  return html`
    <div data-id="Layout">
      <${Navbar} />
      <${Hero} />
      
      <main>
        ${children}
      </main>
      <${Footer} />
    </div>
  `
}

export default Layout