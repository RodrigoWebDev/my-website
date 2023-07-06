import { h } from 'preact'
import htm from 'htm'
import Navbar from "../Navbar"
import Hero from "../Hero"
import Footer from "../Footer"
import Projects from "../Projects"
import Certificates from "../Certificates"
import { useState, useEffect } from 'preact/hooks'

const html = htm.bind(h)

const App = () => {
  const getTabParam = () => parseInt(window.location.search.split("=")[1])
  const [tab, setTab] = useState(getTabParam() || 0);
  
  const tabs = [
    {
      id: 0,
      name: "Projects"
    },
    {
      id: 1,
      name: "Certificates"
    },
    {
      id: 2,
      name: "Achievements"
    },
  ]

  useEffect(() => {
    window.history.replaceState(null, "", `?tab=${tab}`);
  }, [tab])

  return html`
    <div data-id="Layout">
      <${Navbar} />
      <${Hero} />
      
      <main>
        <div class="tabs w-full">
          ${tabs.map(({ name, id }) => {
            return html`
              <a 
                class="tab tab-lifted w-[33%] h-[60px] ${tab === id ? "tab-active" : ""}"
                onClick=${() => {
                  setTab(id);
                }}
              >
                ${name}
              </a>
            `
          })}
        </div>
        ${tab == 0 && html`<${Projects} />`}
        ${tab == 1 && html`<${Certificates} />`}
      </main>
      <${Footer} />
    </div>
  `
}

export default App