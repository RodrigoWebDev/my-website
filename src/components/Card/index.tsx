import { ReactElement } from "preact/compat";

interface Card {
  title: string;
  description: ReactElement | string;
  link: string;
  btnText: string;
}

export const Card = ({ title, description, link, btnText }: Card) => {
  return (
    <div class="card card-border bg-base-100">
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <div>{description}</div>
        <div class="card-actions justify-end">
          <a class="btn btn-primary" href={link} target="_blank">
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
};
