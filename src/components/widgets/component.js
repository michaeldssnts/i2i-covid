import React, { useMemo } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Widget from 'components/widget';
import widgetsSpec from 'data/widgets.json';

const Widgets = ({ category }) => {
  const widgetsSpecByCategory = useMemo(
    () => widgetsSpec.filter((widget) => widget.category === category),
    [widgetsSpec]
  );

  return (
    <div className="c-widgets">
      <div className="row justify-content-md-center">
        {widgetsSpecByCategory.map((widgetSpec) => (
          <div
            key={widgetSpec.slug}
            className={classnames('col-12', {
              'col-md-6': widgetSpec.chart === 'single-bar' || 'stacked-bar',
            })}
          >
            <Widget {...widgetSpec} />
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
