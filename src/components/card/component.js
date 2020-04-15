import React from 'react';
import proptypes from 'prop-types';
import classnames from 'classnames';
import Link from 'redux-first-router-link';

const CardInfo = ({ info }) => {
  return (
    <div className="c-card">
      <ul>
        {info.map((i) => (
          <li key={i.category} id={i.category} className={classnames({ '-active': false })}>
            <h2>{i.title}</h2>
            <p>{i.intro}</p>
            <div className="widgets">widgets</div>
            {i.link && <Link to={`/${i.link}`}>Know more</Link>}
          </li>
        ))}
      </ul>
    </div>
  );
};

CardInfo.propTypes = {
  info: proptypes.array.isRequired,
};

export default CardInfo;
