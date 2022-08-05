import { h } from 'preact'
import htm from 'htm'

interface LinkTypes {
  children?: any
  href?: string
  target?: string
  customClasses?: string
  onClick?: () => void
}

const html = htm.bind(h)
export const linkClasses = 'text-[#1A237E] hover:text-blue-700 transition duration-300 ease-in-out'

const Link = ({ children, href, target, customClasses, onClick}: LinkTypes) => {
  return html`
    <a 
      href=${href} 
      target=${target} 
      class="${linkClasses} ${customClasses}"
      onClick=${onClick}
    >${children}</a>
  `
}

export default Link