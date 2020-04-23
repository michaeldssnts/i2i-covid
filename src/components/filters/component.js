import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import Modal from 'components/modal';
import { filtersData } from './constants';

const Filters = ({ filters, resetFilters, setFilter }) => {
  const [filtersResult, setFiltersResult] = useState(filters);
  const [isOpen, toggleModal] = useState(false);

  const handleToggleModal = () => {
    toggleModal(!isOpen);
  };

  const handleReset = () => {
    resetFilters();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFilter(filtersResult);
    handleToggleModal();
  };

  const handleChange = (e) => {
    const { name, checked, value } = e.target;
    let filterItem = [...filtersResult[name]];
    const isAlready = filterItem.includes(value);

    if (checked && !isAlready) {
      filterItem.push(value);
    } else if (!checked && isAlready) {
      filterItem = filterItem.filter((item) => item !== value);
    }

    setFiltersResult({ ...filtersResult, [name]: filterItem });
  };

  const numberOfFilters = Object.keys(filtersResult)
    .map((key) => filtersResult[key].length)
    .reduce((prev, current) => prev + current);

  return (
    <div className="c-filters">
      <Button onClick={handleToggleModal} className="-color-2">
        Filter by {numberOfFilters} indicator{numberOfFilters > 1 ? 's' : ''}
      </Button>
      <Modal
        isOpen={isOpen}
        title="Select filters"
        type="filters"
        onRequestClose={() => toggleModal(false)}
        actionsComponent={() => (
          <div className="c-filters-action-buttons">
            <Button className="-border-color-1 -medium" onClick={handleReset}>
              Reset
            </Button>
            <Button className="-color-2 -medium" onClick={handleSubmit}>
              Apply
            </Button>
          </div>
        )}
      >
        <form className="modal-filters" onSubmit={handleSubmit}>
          {filtersData.map((filter) => (
            <div key={filter.column} className="form-group">
              <h3>{filter.title}</h3>
              {filter.options.map((opt) => (
                <div className="form-check form-check-inline" key={opt.value}>
                  <input
                    type="checkbox"
                    id={opt.value}
                    name={filter.column}
                    className="form-check-input"
                    value={opt.value}
                    onChange={handleChange}
                    checked={filtersResult[filter.column].includes(opt.value)}
                  />
                  <label className="form-check-label" htmlFor={opt.value}>
                    {opt.label}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </form>
      </Modal>
    </div>
  );
};

Filters.propTypes = {
  filters: PropTypes.shape({
    gender: PropTypes.array,
    area: PropTypes.array,
    age: PropTypes.array,
  }),
  resetFilters: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

Filters.defaultProps = {
  filters: PropTypes.shape({
    gender: [],
    area: [],
    age: [],
  }),
};

export default Filters;
