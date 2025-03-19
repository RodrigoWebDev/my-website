import { Bg3d } from "./components/Bg3d";

function App() {
  return (
    <div>
      <Bg3d />

      <main>
        <div className="mb-3">
          <h1>Rodrigo Queiroz</h1>
          <i>Frontend developer</i>
        </div>

        <section>
          <h2 className="mb-3">About</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod
            tempora consequatur corrupti provident, voluptas dignissimos illo
            excepturi perferendis saepe unde suscipit assumenda id quasi laborum
            exercitationem necessitatibus eum voluptatem.
          </p>
        </section>

        <section>
          <h2 className="mb-3">Work experience</h2>

          {Array.apply(null, Array(3)).map(() => (
            <div className="card mb-3">
              <a href="https://skfb.ly/oyXLG" target="_blank">
                Work 0
              </a>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores, ut necessitatibus eum error, explicabo eos neque
                repellat, temporibus iste mollitia voluptates velit impedit
                voluptas cumque voluptatum obcaecati nulla. Cupiditate, ratione.
              </p>
            </div>
          ))}

          <button className="hvr-bounce-in">Load more</button>
        </section>

        <section>
          <h2 className="mb-3">Projects</h2>

          {Array.apply(null, Array(3)).map(() => (
            <div className="card mb-3">
              <a href="https://skfb.ly/oyXLG" target="_blank">
                Project 0
              </a>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores, ut necessitatibus eum error, explicabo eos neque
                repellat, temporibus iste mollitia voluptates velit impedit
                voluptas cumque voluptatum obcaecati nulla. Cupiditate, ratione.
              </p>
            </div>
          ))}

          <button className="hvr-bounce-in">Load more</button>
        </section>

        <section>
          <h2 className="mb-3">Skills</h2>

          <ul>
            <li>Item 0</li>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3">Contact and links</h2>

          <ul>
            <li>Item 0</li>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3">Credits</h2>
          <a href="https://skfb.ly/oyXLG" target="_blank">
            "space boi" by silvercrow101
          </a>{" "}
          is licensed under{" "}
          <a
            href="http://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
          >
            Creative Commons Attribution-NonCommercial
          </a>
          .
        </section>
      </main>
    </div>
  );
}

export default App;
