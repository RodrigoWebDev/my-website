import { h } from 'preact'
import htm from 'htm'
import GlassCard from "../GlassCard"
import { achievementsData } from "../../misc/achievements";

const html = htm.bind(h)

const Achievements = () => {
  return html`
    <div class="flex flex-wrap justify-evenly my-8">
      ${achievementsData.map(item => {
        return html`
          <div 
            class="cursor-pointer w-full mb-4 w-full sm:w-[48%] lg:w-[31%]"
            onClick=${() => {
              window.open(item.image, "_blank")
            }}
          >
            <${GlassCard}
              title=${item.name}
              img=${item.image}
            />
          </div>
        `  
      }
      )}
    </div>
  `
}

export default Achievements