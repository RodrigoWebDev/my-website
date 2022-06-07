import { h } from 'preact'
import htm from 'htm'
import { theme } from "../globals/theme"

const html = htm.bind(h)

const Hero = ({children, title}) => {
  return html`
    <div id="hero" class="mt-14 mb-20 ${theme.bg} text-white h-52 flex justify-center items-center px-3">
      <div class="text-center">
        <h2 class="text-4xl mb-3">${title}</h2>
        ${children}
      </div>
    </div>
  `
}

export default Hero