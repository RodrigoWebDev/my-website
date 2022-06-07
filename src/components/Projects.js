import { h } from 'preact'
import htm from 'htm'
import Card from "./Card"

//Images
import raia from "../assets/images/drogaraia.jpg"
import sil from "../assets/images/drogasil.jpg"
import me from "../assets/images/me.jpg"
import tunne from "../assets/images/tunne.jpg"
import sicredi from "../assets/images/sicredi.jpg"
import voltz from "../assets/images/voltz.jpg"
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
  },
]

const Projects = () => {
  return html`
    <ul id="projects" class="flex justify-center flex-wrap">
      ${projects.map(({id, title, description, link, image}) => html`
        <li key=${id}>
          <${Card} title=${title} description=${description} link=${link} image=${image}/>
        </li>
      `)}
    </ul>
  `
}

export default Projects