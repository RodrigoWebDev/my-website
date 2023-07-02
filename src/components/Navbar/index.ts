import { h } from 'preact'
import htm from 'htm'

// @ts-ignore
import Github from "../icons/Github"
import Linkedin from "../icons/Linkedin"

const html = htm.bind(h)
const iconCustomClass = 'w-5 sm:w-4 mr-1 opacity-80 fill-[#1A237E]'

const navItems = [
  {
    name: "Linkedin",
    component: Linkedin,
    href: "https://www.linkedin.com/in/rodrigo-queiroz-chagas/"
  },
  {
    name: "Github",
    component: Github,
    href: "https://github.com/RodrigoWebDev"
  }
]

const Navbar = () => {
  return html`
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">Rodrigo Queiroz</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          ${navItems.map(({name, component, href}) => {
            return html`
              <li>
                <a href="${href}" target="_blank" rel="noreferrer">
                  <${component} customClass=${iconCustomClass} title="${name}" description="${name}" />
                  <span class="hidden sm:inline">${name}</span>
                </a>
              </li>
            `
          })}
        </ul>
      </div>
    </div>
  `
}

export default Navbar