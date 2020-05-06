import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import Widget from 'components/widget';
import widgetsSpec from 'data/widgets.json';

const WidgetPage = ({ location }) => {
  const { payload, pathname } = location;
  const { iso, widget_slug } = payload;
  const widgetSpec = widgetsSpec.find(
    (widgetSpec) =>
      widgetSpec.slug === widget_slug && (!widgetSpec.country || widgetSpec.country.includes(iso))
  );

  useEffect(() => {
    ReactGA.pageview(pathname);
  }, [pathname]);

  return (
    <div className="l-widget-page">
      <Widget iso={iso} {...widgetSpec} />
    </div>
  );
};

WidgetPage.propTypes = {
  location: PropTypes.shape({
    payload: PropTypes.shape({
      iso: PropTypes.string,
      widget_slug: PropTypes.string,
    }),
    pathname: PropTypes.string,
  }).isRequired,
};

export default WidgetPage;
