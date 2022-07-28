import { h } from 'preact'
import htm from 'htm'
// @ts-ignore
import projectsBanner from "../assets/images/projectsBanner.jpg"

interface HeroPropTypes {
  children: any
  title: string
}

const html = htm.bind(h)

const Hero = ({children, title}: HeroPropTypes) => {
  return html`
    <div data-id="Hero" style="background-image: url(${projectsBanner})" class="mt-14 mb-20 text-white h-52 bg-center bg-cover relative">
      <div id="overlayer" class="absolute w-full h-full bg-black opacity-80 flex justify-center items-center px-3">
        <div class="text-center">
          <h2 class="text-4xl mb-3">${title}</h2>
          ${children}
        </div>
      </div>
    </div>
  `
}

export default Hero