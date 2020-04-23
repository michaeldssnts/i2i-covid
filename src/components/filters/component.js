import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import Modal from 'components/modal';

import filtersInfo from './constants';

const Filters = ({ filters, resetFilters, setFilter }) => {
  const [isOpen, toggleModal] = useState(false);

  const handleClick = () => {
    toggleModal(!isOpen);
  };

  const handleReset = () => {
    resetFilters();
  };

  const handleChange = (e) => {
    const { name, value, id } = e.currentTarget;

    if (id === 'age') {
      const minValue = Number(value.split('-')[0]);
      const maxValue = Number(value.split('-')[1]);
      const ages = [...filters.age, ...[minValue], ...[maxValue]];

      setFilter({
        [id]: [Math.min(...ages), Math.max(...ages)],
      });
    }

    if (id !== 'age') {
      if (!filters[id].includes(name)) {
        const filterResult = [...filters[id]];
        filterResult.push(`${name}`);
        setFilter({ [id]: filterResult });
      } else {
        const filterResult = filters[id].filter((el) => el !== name);
        setFilter({ [id]: filterResult });
      }
    }
  };

  return (
    <div className="c-filters">
      <Button onClick={handleClick} className="-border-color-2">
        Filter results
      </Button>
      <Modal
        isOpen={isOpen}
        title="Select filters"
        onReset={handleReset}
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
                      type="checkbox"
                      id={filter.id}
                      name={opt}
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
    area: PropTypes.string.isRequired,
    age: PropTypes.array.isRequired,
  }),
  resetFilters: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filters;
