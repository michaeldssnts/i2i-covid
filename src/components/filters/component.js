import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import Modal from 'components/modal';
import useAxios from 'axios-hooks';

import { fetchFilters } from 'services/filters';
import { filtersInfo } from './utils';
import { filtersNames } from './constants';

const Filters = ({ filters, resetFilters, setFilter }) => {
  const [isOpen, toggleModal] = useState(false);

  const handleClick = () => {
    toggleModal(!isOpen);
  };

  const handleReset = () => {
    resetFilters();
  };

  const [{ data, loading }] = useAxios(fetchFilters());

  const filtersModal = !loading && data && data.rows && filtersInfo(filtersNames, data);

  const handleChange = (e) => {
    const { name, id } = e.currentTarget;

    if (!filters[id].includes(name)) {
      const filterResult = [...filters[id]];
      filterResult.push(`${name}`);
      setFilter({ [id]: filterResult });
    } else {
      const filterResult = filters[id].filter((el) => el !== name);
      setFilter({ [id]: filterResult });
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
        type="filters"
        onReset={handleReset}
        onRequestClose={() => toggleModal(false)}
      >
        {data && data.rows && (
          <div className="modal-filters">
            {filtersModal.map((filter, n) => (
              <div key={n}>
                <h3>{filter.label}</h3>
                <ul>
                  {filter.options.map((opt, i) => (
                    <li key={i}>
                      <label htmlFor={opt.label}>{opt.label}</label>
                      <input
                        type="checkbox"
                        id={filter.id}
                        name={opt.label}
                        value={opt}
                        onChange={handleChange}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
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
  filtersNames: PropTypes.array.isRequired,
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
