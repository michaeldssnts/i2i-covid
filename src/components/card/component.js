import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';
import Filters from 'components/filters';
import Widgets from 'components/widgets';

const CardInfo = ({ info, iso }) => {
  return (
    <div className="c-card">
      <ul>
        {info.map((i) => (
          <li key={i.category} id={i.category} className={classnames({ '-active': false })}>
            <h2>{i.title}</h2>
            <p>{i.intro}</p>
            {i.filters && <Filters />}
            <Widgets category={i.category} />
            {i.link && (
              <Link
                to={{
                  type: 'COUNTRY',
                  pathname: '/country',
                  payload: { iso, category: `${i.link}` },
                }}
              >
                Know more
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

CardInfo.propTypes = {
  info: PropTypes.array.isRequired,
  iso: PropTypes.string.isRequired,
};

export default CardInfo;
