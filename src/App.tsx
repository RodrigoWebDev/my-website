import { useEffect, useState } from "react";
import { Bg3d } from "./components/Bg3d";
import { getLocale, getUrlSearch } from "./utils/getLocale";
import { TLocale } from "./locales";
import Icon from "./components/Icon";

function App() {
  const [language, setLanguage] = useState(getUrlSearch() as "pt" | "en");

  const handleLocaleUpdateFromUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("language", language);
    history.pushState({}, "", url);
  };

  useEffect(() => {
    handleLocaleUpdateFromUrl();
  }, [language]);

  const handleLocale = (key: keyof TLocale["pt"] | keyof TLocale["en"]) => {
    return getLocale(language, key);
  };

  return (
    <div>
      <Bg3d />

      <main>
        <div className="mb-2">
          <div className="d-f ai-c">
            <Icon name="me" className="mr-1" color="white" size={30} />
            <h1>Rodrigo Queiroz</h1>
          </div>

          <div className="d-f ai-c">
            <div className="d-f ai-c mr-2">
              <Icon name="dev" className="mr-1" color="white" />
              <i>{handleLocale("frontEndDeveloper")}</i>
            </div>

            <div className="d-f ai-c">
              <Icon name="mapPoint" className="mr-1" color="white" />
              <i>Brazil</i>
            </div>
          </div>
        </div>

        <hr className="mb-3" />

        <div className="mb-3">
          <span className="mr-2">{handleLocale("chooseYourLanguage")}: </span>

          <label className="mr-2">
            <input
              className="mr-1"
              type="radio"
              name="language"
              value="en"
              checked={language === "en"}
              onChange={(e) => {
                setLanguage(e.target.value as "en");
              }}
            />
            <span>EN</span>
            <span className="checkmark"></span>
          </label>

          <label>
            <input
              className="mr-1"
              type="radio"
              name="language"
              value="pt"
              checked={language === "pt"}
              onChange={(e) => {
                setLanguage(e.target.value as "pt");
              }}
            />
            <span>PT</span>
            <span className="checkmark"></span>
          </label>
        </div>

        <section>
          <div className="d-f ai-c mb-3">
            <Icon name="question" className="mr-1" color="white" size={24} />
            <h2>About</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod
            tempora consequatur corrupti provident, voluptas dignissimos illo
            excepturi perferendis saepe unde suscipit assumenda id quasi laborum
            exercitationem necessitatibus eum voluptatem.
          </p>
        </section>

        <section>
          <div className="d-f ai-c mb-3">
            <Icon name="company" className="mr-1" color="white" size={24} />
            <h2>Work experience</h2>
          </div>

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
          <div className="d-f ai-c mb-3">
            <Icon name="work" className="mr-1" color="white" size={24} />
            <h2>Projects</h2>
          </div>

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
          <div className="d-f ai-c mb-3">
            <Icon name="code" className="mr-1" color="white" size={24} />
            <h2>Skills</h2>
          </div>

          <ul>
            <li>Item 0</li>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </section>

        <section>
          <div className="d-f ai-c mb-3">
            <Icon name="contact" className="mr-1" color="white" size={24} />
            <h2>Contact and links</h2>
          </div>

          <ul>
            <li>Item 0</li>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </section>

        <section>
          <div className="d-f ai-c mb-3">
            <Icon name="heart" className="mr-1" color="white" size={24} />
            <h2>Credits</h2>
          </div>
          <ul>
            <li>
              3D model by{" "}
              <a href="https://skfb.ly/oyXLG" target="_blank">
                silvercrow101
              </a>
            </li>
            <li>
              Icons by{" "}
              <a
                href="https://www.figma.com/community/file/1166831539721848736/solar-icons-set"
                target="_blank"
              >
                480 Design
              </a>
            </li>
            <li>
              Code by{" "}
              <a href="https://github.com/RodrigoWebDev/" target="_blank">
                me
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
