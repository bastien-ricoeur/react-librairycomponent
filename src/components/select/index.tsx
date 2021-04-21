import Select from "react-select";

export type CustomSelectProps = {
  options: {
    value: string;
    label: string;
  }[];
  isClearable?: boolean;
  value?: any;
  onChange?: (_value: any, _event: any) => void;
};

const CustomSelect = (props: CustomSelectProps) => {
  const { options, value, isClearable, onChange } = props;
  return (
    <Select
      value={value}
      isClearable={isClearable}
      options={options}
      onChange={onChange}
    />
  );
};

export default CustomSelect;
