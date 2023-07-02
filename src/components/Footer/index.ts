import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

const Footer = () => {
  return html`
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div class="flex">
        <span>Created by</span> 
        <a
          href="https://www.linkedin.com/in/rodrigo-queiroz-chagas/"
          target="_blank"
          class="link"
        >Rodrigo Queiroz</a>
        as
        <a
          href="https://github.com/RodrigoWebDev/my-website"
          target="_blank"
          class="link"
        >open source</a>
      </div>
    </footer>
  `
}

export default Footer