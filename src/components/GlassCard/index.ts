import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

interface IGlassCard {
  title: string
  img: any
}

const GlassCard = ({
  title,
  img
}: IGlassCard) => {
  return html`
    <div class="card w-full bg-base-100 shadow-xl image-full">
      <figure><img src=${img} alt=${title} /></figure>
      <div class="card-body">
        <h2 class="card-title text-[white]">${title}</h2>
      </div>
    </div>
  `
}

export default GlassCard