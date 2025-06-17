import { IInput } from "../../model/components";

export const Input = ({ label, ...rest }: IInput) => {
  return (
    <label className="input w-full">
      {label}
      <input {...rest} />
    </label>
  );
};
