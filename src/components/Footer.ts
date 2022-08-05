import { h } from 'preact'
import htm from 'htm'
import Link from "./Link"
// @ts-ignore
import coffeeDoddle from "../assets/images/coffeeDoddle.svg"

const html = htm.bind(h)

const Footer = () => {
  return html`
    <footer data-id="Footer" class="text-center lg:text-left mt-20">
      <div class="px-4">
        <img class="max-w-[500px] mx-auto" src=${coffeeDoddle} alt="coffeeDoddle" />
      </div>
      <div class="text-gray-700 text-center p-4 border-solid border-t-2 bg-white">
        <span class="mr-1">Created by</span> 
        <${Link} 
          href="https://www.linkedin.com/in/rodrigo-queiroz-chagas/"
          target="_blank"
        >Rodrigo Queiroz<//>
      </div>
    </footer>
  `
}

export default Footer