import axios from 'axios';
import cartoApi from 'utils/carto-api';
import magicDownload from 'utils/download';

export const getData = () => {
  const query = `
  SELECT *
  FROM ${process.env.REACT_APP_DATA_TABLENAME}`;

  return axios
    .get(cartoApi(query, 'csv'))
    .then((data) => {

      return magicDownload(data.data, `data-${Date.now()}.csv`);
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
