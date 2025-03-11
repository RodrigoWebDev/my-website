import enWorks from "../../data/en/experiences.json";
import ptWorks from "../../data/pt/experiences.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";

const Works = () => {
  const works = isEnglish() ? enWorks : ptWorks;

  return (
    <Layout>
      <>
        <h2 class="animate__animated animate__tada">
          🛠️ {isEnglish() ? "Works" : "Experiência profissional"}
        </h2>

        <hr />

        <ul class="animate__animated animate__flash">
          {works.map((work) => (
            <li>
              <h3>
                {work.title} {isEnglish() ? "at" : "em"}{" "}
                <a href={work.companyLink} target="_blank">
                  {work.company}
                </a>
              </h3>
              <p>
                <strong>{isEnglish() ? "Date" : "Período"}</strong>: {work.date}
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: work.description,
                }}
              ></p>
            </li>
          ))}
        </ul>
      </>
    </Layout>
  );
};

export default Works;
