import { h, render } from 'preact'
import htm from 'htm'
import Portfolio from './pages/Portfolio'
import './main.css'

const html = htm.bind(h)

render(html`<${Portfolio}/>`, document.getElementById('app'))