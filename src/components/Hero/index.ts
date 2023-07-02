import { h } from 'preact'
import htm from 'htm'

const html = htm.bind(h)

const Hero = () => {
  const goToLinkedin = () => {
    window.open("https://www.linkedin.com/in/rodrigo-queiroz-chagas/", '_blank')?.focus();
  }

  return html`
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Rodrigo Queiroz</h1>
          <p class="py-6">Hi! I'm a Front End Engineer and this is a simple page to showcase my most relevant commercial projects. If you need more information or contact me check out my Linkedin profile in the button bellow</p>
          <button 
            class="btn btn-primary"
            onClick=${() => {
              goToLinkedin()
            }}
          >
            Go to my linkedin
          </button>
        </div>
      </div>
    </div>
  `
}

export default Hero