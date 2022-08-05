import { h } from 'preact'
import htm from 'htm'

// @ts-ignore
import Github from "./icons/Github"
import Linkedin from "./icons/Linkedin"

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
    <div class="left-2/4 z-[999] my-4 flex w-full max-w-screen-2xl -translate-x-2/4 flex-wrap items-center px-4 fixed mb-10">
      <nav class="block w-full max-w-screen-2xl rounded-xl px-8 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-white pl-6 pr-5 py-2 shadow-2xl shadow-blue-gray-500/10">
        <div class="flex w-full items-center !justify-between text-[#1A237E]">
          <a class="py-2.375 text-size-sm mr-4 whitespace-nowrap font-bold text-inherit ml-0" href="/">Rodrigo Queiroz</a>
          <div class="base-auto flex-grow basis-full items-center overflow-hidden flex lg-max:max-h-0">
            <ul class="mb-0 flex list-none pl-0 text-inherit transition-all ml-auto flex-row gap-1 sm:gap-4">
              ${navItems.map(({name, component, href}) => {
                return html`
                  <li>
                    <a class="flex items-center py-2 transition-all duration-250 text-size-sm text-current font-light px-2 cursor-pointer" href="${href}" target="_blank" rel="noreferrer">
                      <${component} customClass=${iconCustomClass} title="${name}" description="${name}" />
                      <span class="hidden sm:inline">${name}</span>
                    </a>
                  </li>
                `
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  `
}

export default Navbar