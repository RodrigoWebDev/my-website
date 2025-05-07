import { IPage } from "../../model";

const Resume = (props: IPage) => {
  console.log({ props });
  /* const profile = isEnglish() ? enProfile : ptProfile;

  const getAge = () => {
    const birthDate = new Date(1997, 2, 11);
    const diff = Date.now() - birthDate.getTime();
    const year = new Date(diff).getUTCFullYear();

    return Math.abs(year - 1970);
  }; */

  return {
    /* <main>
      <h1>{profile.name}</h1>
      <div>
        <strong>{isEnglish() ? "Profession" : "Profissão"}:</strong>{" "}
        {profile.headline}
      </div>
      <div>
        <strong>{isEnglish() ? "Age" : "Idade"}:</strong> {getAge()}{" "}
        {isEnglish() ? "years old" : "anos"}
      </div>
      <div>
        <strong>{isEnglish() ? "Nationality" : "Nacionalidade"}:</strong>{" "}
        {isEnglish() ? "Brazilian" : "Brasileiro"}
      </div>
      <h2>💭 {isEnglish() ? "About" : "Sobre"}</h2>
      <hr />
      <p
        dangerouslySetInnerHTML={{
          __html: profile.about,
        }}
      ></p>
      <br />
      <SkillsInfo itemsInRow />
      <br />
      <ExperienceInfo />
      <br />
      <h2>🚧 {isEnglish() ? "Projects" : "Projetos"}</h2>
      <hr />
      <br />
      <a href="https://rqueiroz.netlify.app/projects" target="_blank">
        🔗{" "}
        {isEnglish()
          ? "See all the projects I have developed"
          : "Ver todos os projetos que desenvolvi"}
      </a>
      <ContactInfo />
    </main> */
  };
};

export default Resume;
