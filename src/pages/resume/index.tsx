import { IPage } from "../../model";
import { i18n, i18nExperiences } from "../../utils";
import skills from "../../data/skills.json";
import contact from "../../data/contact.json";

const Resume = (props: IPage) => {
  const mainSkills = skills.filter((item) => item.isHighLight);
  console.log({ props });

  const getAge = () => {
    const birthDate = new Date(1997, 2, 11);
    const diff = Date.now() - birthDate.getTime();
    const year = new Date(diff).getUTCFullYear();

    return Math.abs(year - 1970);
  };

  return (
    <main class="prose mx-auto max-w-5xl p-8">
      <h1>Rodrigo Queiroz</h1>
      <div>
        <strong>{i18n("profession")} :</strong> {i18n("profileHeadline")}
      </div>
      <div>
        <strong>{i18n("age")}:</strong> {getAge()} {i18n("yearsOld")}
      </div>
      <div>
        <strong>{i18n("nationality")}:</strong> {i18n("brazilian")}
      </div>
      <h2>💭 {i18n("about")}</h2>
      <hr />
      <p>{i18n("profileDesc")}</p>

      <h2>🎯 {i18n("mainSkills")}</h2>
      <hr />

      <ul class="flex flex-wrap">
        {mainSkills.map((skill) => {
          return (
            <li class="mr-8">
              <strong>{skill.name}</strong>
            </li>
          );
        })}
      </ul>

      <h2>🤹🏻 {i18n("complementarySkills")}</h2>
      <hr />

      <ul class="flex flex-wrap">
        {skills.map((item) => {
          return <li class="mr-8">{item.name}</li>;
        })}
      </ul>

      <h2>💼 {i18n("professionalExperience")}</h2>
      <hr />

      <ul>
        {i18nExperiences().map((item) => {
          return (
            <li class="mr-8">
              <h4>
                <strong>
                  <i>{item.title}</i>
                </strong>{" "}
                {i18n("at")}{" "}
                <a href={item.companyLink} target="_blank">
                  🏢 {item.company}
                </a>
              </h4>
              <p>📅 {item.date}</p>

              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>

      <h2>🛠️ {i18n("projects")}</h2>
      <hr />
      <a href="https://rqueiroz.netlify.app/projects" target="_blank">
        🔗 {i18n("clickHereAndSeeAllMyProjects")}
      </a>

      <h2>📞 {i18n("getInTouch")}</h2>
      <hr />

      <ul class="animate__animated animate__swing">
        <li>
          <strong>📧 E-mail:</strong>{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          🔗 <strong>Linkedin:</strong>{" "}
          <a target="_blank" href={contact.linkedin}>
            {contact.linkedin}
          </a>
        </li>
        <li class="flex">
          📱 <strong class="mr-2">{i18n("phone")}:</strong> +55
          {contact.phone}
          <a
            class="c-success flex items-center"
            href={`https://wa.me/55${contact.phone}`}
            target="_blank"
          >
            💬 {i18n("sendMessageOnWhatsApp")}
          </a>
        </li>
        <li>
          🌐 <strong>Website:</strong>{" "}
          <a target="_blank" href={contact.website}>
            {contact.website}
          </a>
        </li>
      </ul>

      {/* <ContactInfo /> */}
    </main>
  );
};

export default Resume;
