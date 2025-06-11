import { ReactNode } from "preact/compat";

interface ICard {
  title: string;
  description: ReactNode | string;
  link: string;
  btnText: ReactNode | string;
  img?: ReactNode;
}

export const Card = ({ title, description, link, btnText, img }: ICard) => {
  return (
    <div class="card card-border bg-base-100">
      {img}
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
