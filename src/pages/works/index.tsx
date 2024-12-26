import enWorks from "../../data/en/experiences.json";
import ptWorks from "../../data/pt/experiences.json";
import Layout from "../../components/Layout";
import { isEnglish } from "../../utils/locale";

const Works = (props: any) => {
  const works = isEnglish() ? enWorks : ptWorks;

  return (
    <Layout>
      <h2>Trabalhos</h2>
      <hr />

      <ul>
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
    </Layout>
  );
};

export default Works;
