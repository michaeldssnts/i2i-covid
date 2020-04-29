import React, { useState } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';

const Select = ({ options, placeholder, defaultValue }) => {
  const [selectedOption, setOption] = useState(defaultValue);

  const handleChange = (value) => {
    setOption(value);
  };

  return (
    <ReactSelect
      className="c-select"
      classNamePrefix="react-select"
      options={options}
      onChange={() => handleChange}
      placeholder={placeholder}
      value={selectedOption}
      defaultValue={defaultValue}
      dropdownSeparator={null}
    />
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Select.defaultProps = {
  placeholder: '',
};

export default Select;
