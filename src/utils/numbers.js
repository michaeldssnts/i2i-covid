import { format } from 'd3-format';

const FORMAT_DECIMAL = format(',.2r');
const FORMAT_INT = format(',d');
const FORMAT_PERCENTAGE = format('d');

export const formatNumber = (value) =>
  value % 1 === 0 ? FORMAT_INT(value) : FORMAT_DECIMAL(value);

export const formatPercentage = (value) => FORMAT_PERCENTAGE(value);
