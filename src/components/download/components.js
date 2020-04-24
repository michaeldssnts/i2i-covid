import React, { useState } from 'react';
import axios from 'axios';
import { fetchAllData } from 'services/indicators';
import Button from 'components/button';
import magicDownload from 'utils/download';

const DownloadData = () => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    axios.get(fetchAllData({ format: 'csv' })).then(({ data }) => {
      magicDownload(data, `data-${Date.now()}.csv`);
      setLoading(false);
    });
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
