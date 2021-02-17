import * as React from 'react';
import Select from 'react-select';

export type CustomSelectProps = {
  options: {
    value: string;
    label: string;
  }[];
  isClearable?: boolean;
  value?: any;
  onChange?: (value: any, event: any) => void;
};

const CustomSelect: React.FC<CustomSelectProps> = (
  props: CustomSelectProps
) => {
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
