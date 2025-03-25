import { useEffect, useState } from "react";
import { Bg3d } from "./components/Bg3d";
import { getLocale, getUrlSearch } from "./utils/getLocale";
import { TLocale } from "./locales";
import Icon from "./components/Icon";
import data from "./data";
import "animate.css";
import { getPagination } from "./utils/getPagination";

function App() {
  const [language, setLanguage] = useState(getUrlSearch() as "pt" | "en");
  const [currentProjectPage, setCurrentProjectPage] = useState(0);
  const [currentExperiencePage, setCurrentExperiencePage] = useState(0);
  const [currentSkillsPage, setCurrentSkillsPage] = useState(0);
  const [overlayerColor, setOverlayerColor] = useState(0);

  const handleLocaleUpdateFromUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("language", language);
    history.pushState({}, "", url);
  };

  const handleLocale = (key: keyof TLocale["pt"] | keyof TLocale["en"]) => {
    return getLocale(language, key);
  };

  const getDataLocale = (locale: "pt" | "en", key: string) => data[locale][key];

  const projects = getDataLocale(language, "projects");
  const paginatedProjects = getPagination({
    arr: projects,
    itemsPerPage: 3,
    page: currentProjectPage,
  });
  const contact = getDataLocale(language, "contact");
  const experiences = getDataLocale(language, "experiences");
  const paginatedExperiences = getPagination({
    arr: experiences,
    itemsPerPage: 3,
    page: currentExperiencePage,
  });
  const profile = getDataLocale(language, "profile");
  const skills = getDataLocale(language, "skills");
  const paginatedSkills = getPagination({
    arr: skills,
    itemsPerPage: 6,
    page: currentSkillsPage,
  });

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setOverlayerColor((ovl) => ovl + 0.5);
    });
  }, []);

  useEffect(() => {
    handleLocaleUpdateFromUrl();
  }, [language]);

  return (
    <div>
      <Bg3d />

      <div
        className="overlayer"
        style={{
          backgroundColor: `hsl(${overlayerColor}deg 100% 30%)`,
        }}
      ></div>

      <main>
        <div className="mb-2">
          <div className="d-f ai-c">
            <Icon
              name="me"
              className="mr-1 animate__animated animate__lightSpeedInLeft"
              color="white"
              size={30}
            />
            <h1 className="animate__animated animate__lightSpeedInRight">
              {profile.name}
            </h1>
          </div>

          <div className="d-f ai-c">
            <div className="d-f ai-c mr-2 animate__animated animate__jackInTheBox">
              <Icon name="dev" className="mr-1" color="white" />
              <i>{handleLocale("frontEndDeveloper")}</i>
            </div>

            <div className="d-f ai-c animate__animated animate__zoomIn">
              <Icon name="mapPoint" className="mr-1" color="white" />
              <i>{handleLocale("country")}</i>
            </div>
          </div>
        </div>

        <hr className="mb-3" />

        <div className="mb-3 animate__animated animate__slideInRight">
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

        <section className="animate__animated animate__rollIn">
          <div className="d-f ai-c mb-3">
            <Icon name="question" className="mr-1" color="white" size={24} />
            <h2>About</h2>
          </div>

          <p>{profile.about}</p>
        </section>

        <section className="animate__animated animate__rotateIn">
          <div className="d-f ai-c mb-3">
            <Icon name="company" className="mr-1" color="white" size={24} />
            <h2>Work experience</h2>
          </div>

          {paginatedExperiences.map((item: any) => (
            <div className="card mb-3 h-350px">
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

          <div className="d-f ai-c">
            <button
              className="hvr-bounce-in"
              onClick={() => {
                if (currentExperiencePage > 0) {
                  setCurrentExperiencePage((curr) => curr - 1);
                }
              }}
            >
              <Icon name="arrow" size={20} className="mirror" />
            </button>
            <div className="ml-2 mr-2">Page: {currentExperiencePage + 1}</div>
            <button
              className="hvr-bounce-in"
              onClick={() => {
                const hasNextPage =
                  getPagination({
                    arr: experiences,
                    itemsPerPage: 3,
                    page: currentExperiencePage + 1,
                  }).length > 0;

                if (hasNextPage) {
                  setCurrentExperiencePage((curr) => curr + 1);
                }
              }}
            >
              <Icon name="arrow" size={20} />
            </button>
          </div>
        </section>

        <section className="animate__animated animate__flipInY">
          <div className="d-f ai-c mb-3">
            <Icon name="work" className="mr-1" color="white" size={24} />
            <h2>Projects</h2>
          </div>

          {paginatedProjects.map((item: any) => (
            <div className="card mb-3 h-180px">
              <a href={item.link} target="_blank">
                {item.title}
              </a>
              <p dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}

          <div className="d-f ai-c">
            <button
              className="hvr-bounce-in"
              onClick={() => {
                if (currentProjectPage > 0) {
                  setCurrentProjectPage((curr) => curr - 1);
                }
              }}
            >
              <Icon name="arrow" size={20} className="mirror" />
            </button>
            <div className="ml-2 mr-2">Page: {currentProjectPage + 1}</div>
            <button
              className="hvr-bounce-in"
              onClick={() => {
                const hasNextPage =
                  getPagination({
                    arr: projects,
                    itemsPerPage: 3,
                    page: currentProjectPage + 1,
                  }).length > 0;

                if (hasNextPage) {
                  setCurrentProjectPage((curr) => curr + 1);
                }
              }}
            >
              <Icon name="arrow" size={20} />
            </button>
          </div>
        </section>

        <section className="animate__animated animate__flipInX">
          <div className="d-f ai-c mb-3">
            <Icon name="code" className="mr-1" color="white" size={24} />
            <h2>Skills</h2>
          </div>

          <ul className="mb-3">
            {paginatedSkills.map((item: any) => (
              <li className="">{item.name}</li>
            ))}
          </ul>

          <div className="d-f ai-c">
            <button
              className="hvr-bounce-in"
              onClick={() => {
                if (currentSkillsPage > 0) {
                  setCurrentSkillsPage((curr) => curr - 1);
                }
              }}
            >
              <Icon name="arrow" size={20} className="mirror" />
            </button>
            <div className="ml-2 mr-2">Page: {currentSkillsPage + 1}</div>
            <button
              className="hvr-bounce-in"
              onClick={() => {
                const hasNextPage =
                  getPagination({
                    arr: skills,
                    itemsPerPage: 6,
                    page: currentSkillsPage + 1,
                  }).length > 0;

                if (hasNextPage) {
                  setCurrentSkillsPage((curr) => curr + 1);
                }
              }}
            >
              <Icon name="arrow" size={20} />
            </button>
          </div>
        </section>

        <section className="animate__animated animate__flip">
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

        <section className="animate__animated  animate__fadeIn">
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
