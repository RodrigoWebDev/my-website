import { h } from 'preact'
import htm from 'htm'
import { IconProTypes } from "../../global/interfaces"

const html = htm.bind(h)

interface SvgPropTypes extends IconProTypes{
  children: any
}

const Svg = ({children, customClass, title, description}: SvgPropTypes) => {
  return html`
    <svg class=${customClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-labelledby="${title}Title ${description}Desc" role="img">
      <title id="${title}Title">${title}</title>
      <desc id="${description}Desc">${description}</desc> 
      ${children}
    </svg>
  `
}

export default Svg