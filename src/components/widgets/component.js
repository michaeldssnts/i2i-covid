import React, { useMemo } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import Widget from 'components/widget';
import widgetsSpec from 'data/widgets.json';

const Widgets = ({ category, iso, filterBySummary }) => {
  const widgetsSpecByCategory = useMemo(() => {
    let result;
    if (filterBySummary) {
      result = widgetsSpec.filter(
        (widgetSpec) =>
          widgetSpec.category === category && widgetSpec.summary && widgetSpec.published
      );
    } else {
      result = widgetsSpec.filter(
        (widgetSpec) =>
          widgetSpec.category === category &&
          widgetSpec.published &&
          (!widgetSpec.country || widgetSpec.country.includes(iso))
      );
    }
    return orderBy(result, 'order');
  }, [category, filterBySummary, iso]);

  return (
    <div className="c-widgets">
      <div className="row justify-content-md-center">
        {widgetsSpecByCategory.map((widgetSpec) => (
          <div
            key={widgetSpec.slug}
            className={classnames({
              'col-sm-12 col-lg-6': widgetSpec.gridspace === 'half',
              'col-sm-12': widgetSpec.gridspace === 'one',
            })}
          >
            <Widget iso={iso} {...widgetSpec} />
          </div>
        ))}
      </div>
    </div>
  );
};

Widgets.propTypes = {
  category: PropTypes.string.isRequired,
  iso: PropTypes.string.isRequired,
  filterBySummary: PropTypes.bool,
};

Widgets.defaultProps = {
  filterBySummary: false,
};

export default Widgets;
