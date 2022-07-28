import { h } from 'preact'
import htm from 'htm'
// @ts-ignore
import logo from "../assets/icons/laptopCode.svg"
// @ts-ignore
import logo from "../assets/icons/laptopCode.svg"

import Github from "./icons/Github"
import Linkedin from "./icons/Linkedin"

const html = htm.bind(h)
const iconCustomClass = 'w-6 opacity-80'

const Navbar = () => {
  return html`
    <nav data-id="Navbar" class="w-full py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg fixed top-0 left-0 z-[1]">
      <div class="flex flex-wrap items-center justify-between px-6 w-full">
        <div class="flex items-center">
          <img class="w-6 mr-2 opacity-80" src=${logo} alt="logo"/>
          <h1 class="font-bold">Rodrigo Queiroz | Portfolio</h1>
        </div>

        <ul class="flex">
          <li>
            <a href="https://github.com/RodrigoWebDev" target="_blank">
              <${Github} customClass=${iconCustomClass} title="Github" description="Github" />
            </a>
          </li>

          <li class="ml-2">
            <a href="https://www.linkedin.com/in/rodrigo-queiroz-chagas/" target="_blank">
              <${Linkedin} customClass=${iconCustomClass} title="Linkedin" description="Linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `
}

export default Navbar