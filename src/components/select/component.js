import React, { useState } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';

const Select = ({ options, option, placeholder }) => {
  const [selectedOption, changeOption] = useState(option);

  const handleChange = () => {
    changeOption(selectedOption);
  };

  return (
    <ReactSelect
      className="c-select"
      classNamePrefix="react-select"
      options={options}
      onChange={handleChange}
      placeholder={placeholder}
      value={option}
      autosize={true}
      dropdownSeparator={null}
    //  styles={{ width: option.label.length * 8 }}
    />
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  option: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  option: null,
  placeholder: '',
  onChange: () => null,
};

export default Select;
