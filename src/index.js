import { h, render } from 'preact'
import htm from 'htm'
import Portfolio from './pages/Portfolio'

const html = htm.bind(h)

render(html`<${Portfolio}/>`, document.getElementById('app'))