import { h } from 'preact'
import htm from 'htm'
import imagePlaceholder from "../assets/images/placeholder.jpg"
import { theme } from "../globals/theme"

const html = htm.bind(h)

const Card = ({title, description, link, image}) => {
  const imageName = image || imagePlaceholder

  return html`
    <div id="card" class="flex justify-center px-6 mb-10">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <img class="rounded-t-lg" src=${imageName} alt=${title}/>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">${title}</h5>
          <p class="text-gray-700 text-base mb-4">
            ${description}
          </p>
          <a target="_blank" href=${link} class="inline-block px-6 py-2.5 ${theme.bg} text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">See project</a>
        </div>
      </div>
    </div>
  `
}

export default Card