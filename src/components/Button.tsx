import { h } from 'preact'
import htm from 'htm'

interface ButtonTypes {
  children?: any
  href?: string
  type?: string
  target?: string
  customClasses?: string
}

const html = htm.bind(h)

const Button = ({ children, href, target, type, customClasses}: ButtonTypes) => {
  const classes = `middle font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] h-full w-full ${customClasses}`

  if(href){
    return html`
      <a href=${href} target=${target} class=${classes}>${children}</a>
    `
  }else{
    return html`
      <button type=${type} class=${classes}>${children}</a>
    `
  }
  
}

export default Button