import { h } from 'preact'
import htm from 'htm'
import Card from "../Card"
import { projects } from "../../misc/projects"
import { useProjects } from "./hook"
import { useMediaQuery } from '../../global/mediaQuery.hook'

const html = htm.bind(h)

const Projects = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const { 
    getSkills,
    onChange,
    myProjects,
    resetFilters,
    isChecked
  } = useProjects(projects)

  return html`
    <div class="flex flex-col md:flex-row">    
      <div class="ml-4">
        <div class="prose mt-4 mb-4">
          <h2>Filters: </h2>
          <button 
            class="btn btn-accent"
            onClick=${() => {
              resetFilters();
            }}
          >
            Reset filters
          </button>
        </div>

        <div class="flex items-center overflow-scroll py-8 px-4 md:block md:py-0 md:px-0">
          ${getSkills().map(item => 
            html`
              <label title=${item} class="mr-4 md:mr-0 flex items-center mb-2">
                <input 
                  type="checkbox" 
                  class="checkbox mr-2" 
                  checked=${isChecked(item)}
                  onChange=${(e) => {
                    onChange(e, item)
                  }}
                />
                <span class="whitespace-nowrap">${item}</span>
              </label>          
            `
          )}
        </div> 

        ${isDesktop 
          && html`
            <button 
              class="btn btn-accent"
              onClick=${() => {
                resetFilters();
              }}
            >
              Reset filters
            </button>
          `
        }
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
    </div>

  `
}

export default Projects