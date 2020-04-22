import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import widgetsModule from 'data/widgets.json';
import Widget from 'components/widget';

const Widgets = ({ category }) => {
  const widgets = widgetsModule.filter((widget) => widget.category === category);
  return (
    <div className="c-widgets">
      <div className="row justify-content-md-center">
        {widgets.map((widget) => (
          <div
            key={widget.slug}
            className={classnames('col-12', {
              'col-md-6': widget.chart === 'single-bar' || 'stacked-bar',
            })}
          >
            {console.log(widget.slug, widget.chart)}
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
