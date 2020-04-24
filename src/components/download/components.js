import React, { useState } from 'react';

import { getData } from 'services/data';
import Button from 'components/button';

const DownloadData = () => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    getData().then(() => setLoading(false));
  };

  return (
    <div className="c-download">
      {isLoading && <p>...downloading</p>}
      {!isLoading && (
        <Button onClick={handleClick} className="-border-color-1">
          Download data
        </Button>
      )}
    </div>
  );
};

export default DownloadData;
