import React from 'react';
import PropTypes from 'prop-types';
import Widget from 'components/widget';

const WidgetPage = ({ widget_slug }) => (
  <div className="l-widget-page">
    <Widget slug={widget_slug} />
  </div>
);

WidgetPage.propTypes = {
  widget_slug: PropTypes.string.isRequired,
};

export default WidgetPage;
