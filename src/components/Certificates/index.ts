import { h } from 'preact'
import htm from 'htm'
import GlassCard from "../GlassCard"
import { certificatesData } from "../../misc/certificates";

const html = htm.bind(h)

const Certificates = () => {
  return html`
    <div class="flex flex-wrap justify-evenly my-8">
      ${certificatesData.map(item => {
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

export default Certificates