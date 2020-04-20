import React from 'react';
import PropTypes from 'prop-types';

import * as widgetsModule from 'data/widgets.json';

import Widget from 'components/widget';

const Widgets = ({ category }) => {
  const widgets = widgetsModule.default.filter((widget) => widget.category === category);
  return (
    <div className="c-widgets">
      {widgets.map((widget) => (
        <Widget key={widget.slug} {...widget} />
      ))}
    </div>
  );
};

Widgets.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Widgets;
