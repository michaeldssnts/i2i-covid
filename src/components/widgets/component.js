import React from 'react';
import PropTypes from 'prop-types';

import widgetsModule from 'data/widgets.json';
import Widget from 'components/widget';

const Widgets = ({ category }) => {
  const widgets = widgetsModule.filter((widget) => widget.category === category);
  return (
    <div className="c-widgets">
      <div className="row">
        {widgets.map((widget) => (
          <div key={widget.slug} className="col-6">
            <Widget {...widget} />
          </div>
        ))}
      </div>
    </div>
  );
};

Widgets.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Widgets;
