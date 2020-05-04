import React from 'react';
import PropTypes from 'prop-types';
import Widget from 'components/widget';
import widgetsSpec from 'data/widgets.json';

const WidgetPage = ({ iso, widget_slug }) => {
  const widgetSpec = widgetsSpec.find(
    (widgetSpec) => widgetSpec.slug === widget_slug && widgetSpec.country.includes(iso)
  );

  return (
    <div className="l-widget-page">
      <Widget iso={iso} {...widgetSpec} />
    </div>
  );
};

WidgetPage.propTypes = {
  iso: PropTypes.string.isRequired,
  widget_slug: PropTypes.string.isRequired,
};

export default WidgetPage;
