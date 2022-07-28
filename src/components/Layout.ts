import { h } from 'preact'
import htm from 'htm'
import Navbar from "./Navbar"
import Hero from "./Hero"
import Footer from "./Footer"

const html = htm.bind(h)

interface LayoutPropTypes {
  children: any
  title: string
}

const Layout = ({children, title}: LayoutPropTypes) => {
  return html`
    <div data-id="Layout">
      <${Navbar} />
      <${Hero} title=${title}>
        <p>Bellow are my most relevant Front end commercial projects. You can see my open source projects <a class="underline" href="https://github.com/RodrigoWebDev?tab=repositories" target="_blank">here</a></p>
      <//>
      <main class="max-w-7xl mx-auto">
        ${children}
      </main>
      <${Footer} />
    </div>
  `
}

export default Layout