//https://react-select.com/home
import Select, { Props } from "react-select";

export const MySelect = (props: Props) => {
  const classNames = {
    container: () => "w-full text-base-content!",
    control: (props: any) => {
      return `bg-base-100! border-(--input-color)! h-[40px]! rounded-(var(--radius-field)! text-base-content! ${
        props.isFocused
          ? "outline-2! outline-(--input-color)! outline-offset-2 isolate"
          : ""
      }`;
    },
    input: () => "text-base-content!",
    valueContainer: () => "bg-base-100",
    menuList: () => "bg-base-100",
    indicatorSeparator: () => "bg-base-content!",
    dropdownIndicator: () => "text-base-content!",
    singleValue: () => "text-base-content!",
    ...props.classNames,
  };

  return <Select {...props} classNames={classNames} />;
};
