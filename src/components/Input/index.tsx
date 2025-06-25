import { IInput } from "../../model/components";

export const Input = ({ label, autoCompleteOptions, ...rest }: IInput) => {
  const listId = `input-${new Date().getTime()}`;
  return (
    <>
      <label className="input w-full">
        {label}
        <input {...rest} list={listId} />
      </label>
      {autoCompleteOptions && autoCompleteOptions?.length > 0 && (
        <datalist id={listId}>
          {autoCompleteOptions?.map((item) => (
            <option value={item} />
          ))}
        </datalist>
      )}
    </>
  );
};
