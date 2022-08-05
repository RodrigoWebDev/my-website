import { h } from 'preact'
import htm from 'htm'
import Swal from 'sweetalert2'
import Link, { linkClasses } from "./Link"

const html = htm.bind(h)

interface CardsPropTypes {
  title: string
  description: string
  link: string
  image: string,
  stack: string[]
}

const Card = ({title, description, link, image, stack}: CardsPropTypes) => {
  const openAlert = () => {
    const heading = "font-bold leading-tight"
    const h3 = `${heading} text-xl`
    const upRightFromSquare = '<svg class="w-4 inline fill-[#1A237E]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"/></svg>'

    const getStackList = () => {
      const htmlStackItems = stack.map(item => `<li>${item}</li>`)
      return htmlStackItems.join("")
    }
    
    Swal.fire({
      html: `
      <h2 class="${heading} text-4xl mb-4 border-solid border-b-2 pb-2">${title}</h2>
      <div class="text-left">
        <div class="mb-3">
          <h3 class="${h3} mb-2">Description</h3>
          <p class="mb-2">${description}</p>
          <a href="${link}" target="_blank" class="${linkClasses} underline">Open ${upRightFromSquare}</a>
        </div>

        <div class="mb-3">
          <h3 class="${h3} mb-2">Stack</h3>
          <ul class="list-disc pl-7">${getStackList()}</ul>
        </div>
      </div>
      `,
      confirmButtonText: "Close",
      showCloseButton: true,
    })
  }


  return html`
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6 mb-12">
      <div class="h-[200px] overflow-hidden">
        <img class="w-full" alt=${title} src=${image} />
      </div>
      <div class="p-6 text-center">
        <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
          <span>${title}</span>
        </h5>
        <p class="block antialiased font-sans text-base font-light leading-relaxed text-inherit">
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit !mb-4 !font-normal !text-blue-gray-500">${description}</p>
        </p>
      </div>
      <div class="p-6 border-t border-blue-gray-50 -mt-4 flex items-center justify-between py-3">
        <${Link}
          href="javascript:void(0)"
          customClasses="font-semibold"
          onClick=${() => openAlert()}
        >Info<//>
        <${Link}
          href=${link}
          target="_blank"
          customClasses="font-semibold"
        >Open<//>
      </div>
    </div>
  `
}

export default Card