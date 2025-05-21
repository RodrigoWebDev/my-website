import bgPattern from "../../images/abstract-pattern-design_1053-524.jpg";
import { i18n, i18nExperiences, isOddNumber } from "../../utils";
import Icon from "../Icon";

export const ExperienceInfo = () => {
  return (
    <div>
      <div
        class="hero min-h-[60vh] mb-8"
        style={{
          backgroundImage: `url(${bgPattern})`,
        }}
      >
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="flex flex-col items-center">
            <Icon name="company" size={100} />
            <h1 class="mb-5 text-5xl font-bold">
              {i18n("professionalExperience")}
            </h1>
          </div>
        </div>
      </div>

      <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-auto max-w-[700px] px-4">
        {i18nExperiences().map((work, index) => {
          const isOdd = isOddNumber(index);

          return (
            <li>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div
                class={`${
                  isOdd ? "timeline-start md:text-end" : "timeline-end"
                } mb-10`}
              >
                <time class="font-mono italic">{work.date}</time>
                <div class="text-lg font-black">
                  {work.title} em{" "}
                  <a class="link" href={work.companyLink} target="_balnk">
                    {work.company}
                  </a>
                </div>
                {work.description}
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
