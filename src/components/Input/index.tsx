import { InputHTMLAttributes, ReactNode } from "preact/compat";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export const Input = ({ icon, ...rest }: IInput) => {
  return (
    <label className="input w-full">
      {icon}
      <input {...rest} />
    </label>
  );
};
