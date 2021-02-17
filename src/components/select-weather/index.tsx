import * as React from 'react';
import Select, { components } from 'react-select';
import {
  FaCloudMeatball,
  FaCloudShowersHeavy,
  FaCloudSunRain,
  FaCloudSun,
  FaSun,
} from 'react-icons/fa';

export type WeatherSelectProps = {
  isClearable?: boolean;
  onChange?: (value: any, event: any) => void;
};

const WeatherSelect: React.FC<WeatherSelectProps> = (
  props: WeatherSelectProps
) => {
  const { isClearable, onChange } = props;
  const { Option } = components;

  const customSingleValue = (props) => (
    <div>
      {props.data.icon}
      {props.data.label}
    </div>
  );

  const customSingleOption = (props) => (
    <Option {...props}>
      {props.data.icon}
      {props.data.label}
    </Option>
  );

  const options = [
    {
      value: 'snowfall',
      label: 'Snowfall',
      icon: <FaCloudMeatball style={{ marginRight: 8 }} />,
    },
    {
      value: 'heavy_rain',
      label: 'Heavy rain',
      icon: <FaCloudShowersHeavy style={{ marginRight: 8 }} />,
    },
    {
      value: 'rainy',
      label: 'Rainy',
      icon: <FaCloudSunRain style={{ marginRight: 8 }} />,
    },
    {
      value: 'cloudy',
      label: 'Cloudy',
      icon: <FaCloudSun style={{ marginRight: 8 }} />,
    },
    {
      value: 'sunny',
      label: 'Sunny',
      icon: <FaSun style={{ marginRight: 8 }} />,
    },
  ];

  return (
    <Select
      defaultValue={options[3]}
      isClearable={isClearable}
      options={options}
      components={{
        Option: customSingleOption,
        SingleValue: customSingleValue,
      }}
      onChange={onChange}
    />
  );
};

export default WeatherSelect;
