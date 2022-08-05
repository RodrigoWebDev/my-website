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
        <p>Bellow are my most relevant Front end commercial projects. You can see my open source projects <a class="underline text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out mb-4" href="https://github.com/RodrigoWebDev?tab=repositories" target="_blank">here</a></p>
      <//>
      
      <main class="relative flex flex-col bg-clip-border rounded-xl text-gray-700 mx-6 -mt-20 md:mx-12 md:-mt-48 py-10 px-3">
        ${children}
      </main>
      <${Footer} />
    </div>
  `
}

export default Layout