import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

import info from './constants';

const Summary = ({ iso }) => {
  return (
    <ul className="c-summary">
      {info.map((i) => (
        <li key={i.category} id={i.category} className={classnames({ '-active': false })}>
          <h2>{i.title}</h2>
          <p>{i.intro}</p>
          {/* <Widgets category={i.category} /> */}
          {i.link && (
            <Link
              to={{
                type: 'COUNTRY',
                payload: { iso, category: i.category },
              }}
            >
              Know more
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

Summary.propTypes = {
  title: PropTypes.string.isRequired,
  iso: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Summary;
