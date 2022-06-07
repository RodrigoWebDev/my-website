import { h } from 'preact'
import htm from 'htm'
import logo from "../assets/icons/laptopCode.svg"

import Github from "./icons/Github"

const html = htm.bind(h)

const Navbar = () => {
  return html`
    <nav id="navbar" class="w-full py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg fixed top-0 left-0 z-[1]">
      <div class="flex flex-wrap items-center justify-between px-6 w-full">
        <div class="flex items-center">
          <img class="w-6 mr-2 opacity-80" src=${logo} alt="logo"/>
          <h1 class="font-bold">Rodrigo Queiroz</h1>
        </div>
        <a href="https://github.com/RodrigoWebDev" target="_blank"><${Github} customClass="w-6 opacity-80" /></a>
      </div>
    </nav>
  `
}

export default Navbar