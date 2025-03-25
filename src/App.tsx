import { useEffect, useState } from "react";
import { Bg3d } from "./components/Bg3d";
import { getLocale, getUrlSearch } from "./utils/getLocale";
import { TLocale } from "./locales";
import Icon from "./components/Icon";
import data from "./data";
import { exp } from "three/tsl";

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

  console.log("🚀 ~ App ~ language:", language);

  const getDataLocale = (locale: "pt" | "en", key: string) => data[locale][key];

  const projects = getDataLocale(language, "projects");
  const contact = getDataLocale(language, "contact");
  const experiences = getDataLocale(language, "experiences");
  const profile = getDataLocale(language, "profile");
  const skills = getDataLocale(language, "skills");

  return (
    <div>
      <Bg3d />

      <main>
        <div className="mb-2">
          <div className="d-f ai-c">
            <Icon name="me" className="mr-1" color="white" size={30} />
            <h1>{profile.name}</h1>
          </div>

          <div className="d-f ai-c">
            <div className="d-f ai-c mr-2">
              <Icon name="dev" className="mr-1" color="white" />
              <i>{handleLocale("frontEndDeveloper")}</i>
            </div>

            <div className="d-f ai-c">
              <Icon name="mapPoint" className="mr-1" color="white" />
              <i>{handleLocale("country")}</i>
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

          <p>{profile.about}</p>
        </section>

        <section>
          <div className="d-f ai-c mb-3">
            <Icon name="company" className="mr-1" color="white" size={24} />
            <h2>Work experience</h2>
          </div>

          {experiences.map((item: any) => (
            <div className="card mb-3">
              <h2>{item.title}</h2>
              <div className="d-f ai-c mb-2">
                <strong className="mr-1 fs-20px">
                  {handleLocale("company")}:
                </strong>
                <a href={item.companyLink} target="_blank">
                  {item.company}
                </a>
              </div>

              <p>{item.description}</p>
            </div>
          ))}

          <button className="hvr-bounce-in">Load more</button>
        </section>

        <section>
          <div className="d-f ai-c mb-3">
            <Icon name="work" className="mr-1" color="white" size={24} />
            <h2>Projects</h2>
          </div>

          {projects.map((item: any) => (
            <div className="card mb-3">
              <a href={item.link} target="_blank">
                {item.title}
              </a>
              <p dangerouslySetInnerHTML={{ __html: item.description }} />
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
            {skills.map((item: any) => (
              <li className="">{item.name}</li>
            ))}
          </ul>
        </section>

        <section>
          <div className="d-f ai-c mb-3">
            <Icon name="contact" className="mr-1" color="white" size={24} />
            <h2>Contact and links</h2>
          </div>

          <ul className="animate__animated animate__swing d-f ai-c ls-n p-0">
            <li className="mr-3">
              <a
                href={`https://wa.me/55${contact.phone}`}
                title={contact.phone}
                target="_blank"
              >
                <Icon name="whatsApp" color="white" size={32} />
              </a>
            </li>
            <li className="mr-3">
              <a
                href={contact.linkedin}
                title={contact.linkedin}
                target="_blank"
              >
                <Icon name="linkedin" color="white" size={32} />
              </a>
            </li>
            <li className="mr-3">
              <a href={`mailto:${contact.email}`} title={contact.email}>
                <Icon name="email" color="white" size={32} />
              </a>
            </li>
          </ul>
        </section>

        <section>
          <div className="d-f ai-c mb-3">
            <Icon name="heart" className="mr-1" color="white" size={24} />
            <h2>Credits</h2>
          </div>
          <ul>
            <li>
              {handleLocale("model3Dby")}{" "}
              <a href="https://skfb.ly/oyXLG" target="_blank">
                silvercrow101
              </a>
            </li>
            <li>
              {handleLocale("iconsBy")}{" "}
              <a
                href="https://www.figma.com/community/file/1166831539721848736/solar-icons-set"
                target="_blank"
              >
                480 Design
              </a>
            </li>
            <li>
              {handleLocale("codeBy")}{" "}
              <a href="https://github.com/RodrigoWebDev/" target="_blank">
                {handleLocale("me")}
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
