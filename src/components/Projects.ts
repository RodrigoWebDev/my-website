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
//@ts-ignore
import sicrediComunidade from "../assets/images/sicredi-comunidde.jpg"

const html = htm.bind(h)

const projects = [
  {
    title: "Sicredi na Comunidade",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["HTML", "CSS", "Javascript", "React(16.8 with hooks)", "MUI", "Typescript", "REST API", "React Routers", "Jest/RTL"],
    link: "https://www.sicredi.com.br/nacomunidade/",
    image: sicrediComunidade
  },
  {
    title: "Drogaraia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["HTML", "CSS", "Javascript", "React(16.8 with hooks)", "Typescript", "GraphQL(Apollo Client)", "Next.js(SSR)", "Styled components", "Jest/RTL"],
    link: "https://www.drogaraia.com.br/",
    image: raia
  },
  {
    title: "Drogasil",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["HTML", "CSS", "Javascript", "React(16.8 with hooks)", "Typescript", "GraphQL(Apollo Client)", "Next.js(SSR)", "Styled components", "Jest/RTL"],
    link: "https://www.drogasil.com.br/",
    image: sil
  },
  {
    title: "Mercado Eletrônico",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["HTML", "CSS", "Javascript", "Vue.js(v2)", "API Rest", "Cypress"],
    link: "https://www.me.com.br/supplier/",
    image: me
  },
  {
    title: "Tunne",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["HTML", "CSS", "Sass", "Javascript", "React(16.8 with hooks)", "Typescript", "GraphQL(Apollo Client)"],
    link: "https://tunne.com.br/",
    image: tunne
  },
  {
    title: "Sicredi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["HTML", "CSS", "Javascript", "Jquery(Legacy interface)", "React", "API Rest", "Electron"],
    link: "https://www.sicredi.com.br/home/",
    image: sicredi
  },
  {
    title: "Voltz",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["HTML", "CSS", "Javascript", "React", "Gatsby"],
    link: "https://voltzmotors.com/",
    image: voltz
  },
  {
    title: "Wine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stack: ["HTML", "CSS", "JavaScript", "jQuery", "Sass", "Less", "WordPress", "OCC(Oracle Cloud Commerce)", "HandleBars"],
    link: "https://www.wine.com.br/",
    image: wine
  }
]

const Projects = () => {
  return html`
    <ul data-id="Projects" class="flex flex-wrap justify-evenly">
      ${projects.map(({title, description, link, image, stack}) => html`
        <li key=${title} class="w-[90%] sm:w-[45%] lg:w-[32%]">
          <${Card} 
            title=${title} 
            description=${description} 
            link=${link} 
            image=${image}
            stack=${stack}
          />
        </li>
      `)}
    </ul>
  `
}

export default Projects