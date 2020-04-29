import React from 'react';
import Button from 'components/button';

const DownloadForm = () => (
  <div className="c-download-form">
    <Button className="-border-color-1">
      <a
        className="typeform-share link"
        href="https://i2ifacility.typeform.com/to/OC79X4"
        dataMode="drawer_left"
        dataHideHeaders={true}
        dataHideFooter={true}
        dataSubmitCloseDelay="3"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download here
      </a>
    </Button>
  </div>
);

export default DownloadForm;
