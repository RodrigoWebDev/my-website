import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

interface CardsPropTypes {
  title: string
  description: string
  link: string
  image: string
}

const Card = ({title, description, link, image}: CardsPropTypes) => {
  const imageName = image

  return html`
    <div data-id="Card" class="mb-10">
      <div class="rounded-lg shadow-lg bg-white">
        <img class="rounded-t-lg w-full h-32 object-cover" src=${imageName} alt=${title}/>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">${title}</h5>
          <p class="text-gray-700 text-base mb-4">
            ${description}
          </p>
          <a target="_blank" href=${link} class="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">See project</a>
        </div>
      </div>
    </div>
  `
}

export default Card