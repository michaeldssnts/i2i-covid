import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import Modal from 'components/modal';

import filtersInfo from './constants';

const Filters = ({ filters, resetFilters, setFilter }) => {
  const [isOpen, toggleModal] = useState(true);

  const handleClick = () => {
    toggleModal(!isOpen);
  };

  const handleCancel = () => {
    resetFilters();
    toggleModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    //condition to checkbox ??
    // if (name === 'age') {
    //   const index = filters.age.findIndex((filter) => filter === value);
    //   const ages =
    //     index === -1
    //       ? [...filters.age, ...[value]]
    //       : filters.age.filter((filter) => filter !== value);
    //   setFilter({
    //     [name]: ages,
    //   });
    // } else
      setFilter({
        [name]: value,
      });
  };

  return (
    <div className="c-filters">
      <Button onClick={handleClick} className="-primary">
        Filter results
      </Button>
      <Modal
        isOpen={isOpen}
        title="Select filters"
        onCancel={handleCancel}
        onRequestClose={() => toggleModal(false)}
      >
        <div className="modal-filters">
          {filtersInfo.map((filter, n) => (
            <div key={n}>
              <h3>{filter.label}</h3>
              <ul>
                {filter.options.map((opt, i) => (
                  <li key={i}>
                    <label htmlFor={opt}>{opt}</label>
                    <input
                      type={filter.options.length > 2 ? 'checkbox' : 'radio'}
                      id={opt}
                      name={filter.id}
                      value={opt}
                      onChange={handleChange}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

Filters.propTypes = {
  filters: PropTypes.shape({
    gender: PropTypes.string.isRequired,
    are: PropTypes.string.isRequired,
    age: PropTypes.array.isRequired,
  }),
  resetFilters: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filters;
