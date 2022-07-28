import { h } from 'preact'
import htm from 'htm'
import Card from "./Card"

//Images
//@ts-ignore
import raia from "../assets/images/drogaraia.jpg"
//@ts-ignore
import sil from "../assets/images/drogasil.jpg"
//@ts-ignore
import me from "../assets/images/me.jpg"
//@ts-ignore
import tunne from "../assets/images/tunne.jpg"
//@ts-ignore
import sicredi from "../assets/images/sicredi.jpg"
//@ts-ignore
import voltz from "../assets/images/voltz.jpg"
//@ts-ignore
import wine from "../assets/images/wine.jpg"

const html = htm.bind(h)

const projects = [
  {
    id: 0,
    title: "Drogaraia",
    description: "Stack: HTML, CSS, Javascript, React(16.8 with hooks), Typescript, GraphQL(Apollo Client), Next.js(SSR), Styled components, Jest/RTL",
    link: "https://www.drogaraia.com.br/",
    image: raia
  },
  {
    id: 1,
    title: "Drogasil",
    description: "Stack: HTML, CSS, Javascript, React(16.8 with hooks), Typescript, GraphQL(Apollo Client), Next.js(SSR), Styled components, Jest/RTL",
    link: "https://www.drogasil.com.br/",
    image: sil
  },
  {
    id: 2,
    title: "Mercado Eletrônico",
    description: "Stack: HTML, CSS, Javascript, Vue.js(v2), API Rest, Cypress",
    link: "https://www.me.com.br/supplier/",
    image: me
  },
  {
    id: 3,
    title: "Tunne",
    description: "Stack: HTML, CSS, Sass, Javascript, React(16.8 with hooks), Typescript, GraphQL(Apollo Client)",
    link: "https://tunne.com.br/",
    image: tunne
  },
  {
    id: 4,
    title: "Sicredi",
    description: "Stack: HTML, CSS, Javascript, Jquery(Legacy interface) React, API Rest, Electron",
    link: "https://www.sicredi.com.br/home/",
    image: sicredi
  },
  {
    id: 5,
    title: "Voltz",
    description: "Stack: HTML, CSS, Javascript, React, Gatsby",
    link: "https://voltzmotors.com/",
    image: voltz
  },
  {
    id: 6,
    title: "Wine",
    description: "HTML, CSS, JavaScript, jQuery, Sass, Less, WordPress, OCC(Oracle Cloud Commerce), HandleBars",
    link: "https://www.wine.com.br/",
    image: wine
  }
]

const Projects = () => {
  return html`
    <ul data-id="Projects" class="flex flex-wrap justify-evenly">
      ${projects.map(({id, title, description, link, image}) => html`
        <li key=${id} class="w-[90%] sm:w-[45%] lg:w-[32%]">
          <${Card} title=${title} description=${description} link=${link} image=${image}/>
        </li>
      `)}
    </ul>
  `
}

export default Projects