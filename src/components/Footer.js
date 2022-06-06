import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

const Footer = () => {
  return html`
    <footer class="bg-gray-200 text-center lg:text-left mt-20">
      <div class="text-gray-700 text-center p-4" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2022 Copyright: Rodrigo Queiroz
      </div>
    </footer>
  `
}

export default Footer