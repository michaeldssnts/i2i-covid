import React from 'react';
import PropTypes from 'prop-types';
import Widget from 'components/widget';
import widgetsSpec from 'data/widgets.json';

const WidgetPage = ({ widget_slug }) => {
  const widgetSpec = widgetsSpec.find(
    (widgetSpec) => widgetSpec.slug === widget_slug
  );

  return (
    <div className="l-widget-page">
      <Widget {...widgetSpec} />
    </div>
  );
};

WidgetPage.propTypes = {
  widget_slug: PropTypes.string.isRequired,
};

export default WidgetPage;
