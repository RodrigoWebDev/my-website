import { isEnglish } from "../../utils/locale";

export const LanguagesInfo = () => {
  return (
    <>
      <h2 class="animate__animated animate__jello">
        🗣️ {isEnglish() ? "Languages" : "Idiomas"}
      </h2>

      <hr />

      <ul>
        <li>{isEnglish() ? "Native portuguese" : "Português nativo"}</li>
        <li>
          {isEnglish() ? "English" : "Inglês"}{" "}
          <a
            href={`https://cert.efset.org/${isEnglish() ? "" : "pt/"}zFET5A`}
            target="_blank"
          >
            📃 {isEnglish() ? "Certificate" : "Certificado"}
          </a>
        </li>
      </ul>
    </>
  );
};

export default LanguagesInfo;
