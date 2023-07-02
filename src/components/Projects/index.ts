import { h } from 'preact'
import htm from 'htm'
import Card from "../Card"
import { projects } from "../../misc/projects"
import { useProjects } from "./useProjects"

const html = htm.bind(h)

const Projects = () => {
  const { 
    getSkills,
    onChange,
    myProjects
  } = useProjects(projects)

  return html`
    <div class="prose mt-4 px-4">
      <h2>Filter: </h2>
    </div>

    <div class="flex items-center overflow-scroll py-8 px-4">
      ${getSkills().map(item => 
        html`
          <label title=${item} class="mr-6 flex items-center">
            <input 
              type="checkbox" 
              class="checkbox mr-2" 
              onChange=${(e) => {
                onChange(e, item)
              }}
            />
            <span class="whitespace-nowrap">${item}</span>
          </label>          
        `
      )}
    </div>  

    <ul data-id="Projects" class="flex flex-wrap justify-evenly px-4 py-8">
      ${myProjects.map(({title, description, link, image, stack}) => html`
        <li key=${title} class="mb-8 w-full sm:w-[49%] lg:w-[32%]">
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