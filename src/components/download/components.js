import React from 'react';
import useAxios from 'axios-hooks';
import { CSVLink } from 'react-csv';
import Button from 'components/button';

import { fetchAllData } from 'services/data';

const DownloadData = () => {
  const [{ data }] = useAxios(fetchAllData());

  const csvData = data && JSON.stringify(data.rows);

  return (
    <div>
      {data && (
        <CSVLink data={csvData} filename={`data-${Date.now()}.csv`}>
          <Button className="-border-color-1">Download data</Button>
        </CSVLink>
      )}
    </div>
  );
};

export default DownloadData;
