import React from 'react';
import { useLocalStorage } from 'react-use';
import Select from 'react-select';

const LocalStorageDropdown = ({ options, initialValue, onChange }) => {
  const [selectedOption, setSelectedOption] = useLocalStorage('selectedOption', initialValue);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onChange(selectedOption);
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      onChange={handleChange}
    />
  );
};

export default LocalStorageDropdown;
