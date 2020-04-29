import React, { useState } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';

import './styles.scss';

const Select = ({ options, option }) => {
  const [selectedOption, changeOption] = useState(option);

  const handleChange = () => {
    changeOption(selectedOption);
  };

  const customStyles = {
    control: () => ({
      width: `${selectedOption.label.length * 35 + 35}px`,
    }),
  };

  return (
    <ReactSelect
      className="c-select"
      classNamePrefix="react-select"
      options={options}
      onChange={handleChange}
      value={selectedOption}
      styles={customStyles}
      dropdownSeparator={null}
    />
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

Select.defaultProps = {
  value: null,
  onChange: () => null,
};

export default Select;
