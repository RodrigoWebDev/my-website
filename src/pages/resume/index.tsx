import { IPage } from "../../model";
import { i18n, i18nExperiences } from "../../utils";
import skills from "../../data/skills.json";
import contact from "../../data/contact.json";
import Icon from "../../components/Icon";

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
      <h2 className="flex items-center flex-wrap">
        <Icon name="about" class="mr-2" size={32} /> {i18n("about")}
      </h2>
      <hr />
      <p>{i18n("profileDesc")}</p>

      <h2 className="flex items-center flex-wrap">
        <Icon name="computer" class="mr-2" size={32} /> {i18n("mainSkills")}
      </h2>
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

      <h2 className="flex items-center flex-wrap">
        <Icon name="clipboardList" class="mr-2" size={32} />{" "}
        {i18n("complementarySkills")}
      </h2>
      <hr />

      <ul class="flex flex-wrap">
        {skills.map((item) => {
          return <li class="mr-8">{item.name}</li>;
        })}
      </ul>

      <h2 className="flex items-center flex-wrap">
        <Icon name="company" class="mr-2" size={32} />{" "}
        {i18n("professionalExperience")}
      </h2>
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
                  <Icon
                    name="company"
                    class="ml-2 mr-1 mt-[-5px] inline"
                    size={20}
                  />{" "}
                  {item.company}
                </a>
              </h4>
              <p>
                <Icon name="calendar" class="inline mt-[-5px]" size={20} />{" "}
                {item.date}
              </p>

              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>

      <h2 className="flex items-center flex-wrap">
        <Icon name="formatListBulleted" class="mr-2" size={32} />{" "}
        {i18n("projects")}
      </h2>
      <hr />
      <a href="https://rqueiroz.netlify.app/projects" target="_blank">
        {i18n("viewAllMyProjectsIn")} https://rqueiroz.netlify.app/projects
      </a>

      <h2 className="flex items-center flex-wrap">
        <Icon name="phone" class="mr-2" size={32} /> {i18n("getInTouch")}
      </h2>
      <hr />

      <ul class="animate__animated animate__swing">
        <li>
          <div class="flex items-center flex-wrap">
            <Icon name="email" class="mr-2 inline" size={20} />
            <strong>E-mail:</strong>
            &nbsp;
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </li>

        <li>
          <div class="flex items-center flex-wrap">
            <Icon name="linkedin" class="mr-2 inline" size={20} />
            <strong>Linkedin:</strong>
            &nbsp;
            <a target="_blank" href={contact.linkedin}>
              {contact.linkedin}
            </a>
          </div>
        </li>

        <li>
          <div class="flex items-center flex-wrap">
            <Icon name="whatsapp" class="mr-2 inline" size={20} />
            <strong>Whatsapp:</strong>
            &nbsp;
            <a target="_blank" href={`https://wa.me/55${contact.phone}`}>
              +55{contact.phone}
            </a>
          </div>
        </li>

        <li>
          <div class="flex items-center flex-wrap">
            <Icon name="web" class="mr-2 inline" size={20} />
            <strong>Website:</strong>
            &nbsp;
            <a target="_blank" href={contact.website}>
              {contact.website}
            </a>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default Resume;
