import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

const Hero = ({title}) => {
  return html`
    <div id="hero" class="mt-14 mb-20 bg-gray-800 text-white h-52 flex justify-center items-center text-4xl">
      ${title}
    </div>
  `
}

export default Hero