import { h } from 'preact'
import htm from 'htm'
import Button from "./Button"
// @ts-ignore
import dancingDoodle from "../assets/images/dancingDoodle.svg"

const html = htm.bind(h)

const Hero = () => {
  return html`
    <div data-id="Hero" class="px-4 pb-[50px] md:pb-[250px] pt-[120px] flex flex-col md:flex-row md:justify-center items-center">
      <div class="w-full md:w-2/5">
        <h1 class="block antialiased text-5xl leading-tight mb-2 font-black tracking-normal text-[#1A237E]">Rodrigo Queiroz</h1>
        <p class="mb-4">Hi! I'm a Front End Engineer and this is a simple page to showcase my most relevant commercial projects. If you need more information or contact me check out my Linkedin profile in the button bellow</p>
        <${Button} 
          href="https://www.linkedin.com/in/rodrigo-queiroz-chagas/"
          target="_blank"
        >
          Contact me
        <//>
      </div>

      <div class="w-full md:w-2/5 mt-7 md:mt-0">
        <img class="max-w-[400px] mx-auto md:w-full md:max-w-[500]" src=${dancingDoodle} alt="" />
      </div>
    </div>
  `
}

export default Hero