import { format } from 'd3-format';

const FORMAT_NUMBER = format('.2r');
const FORMAT_PERCENTAGE = format('d');

export const formatNumber = (value) => FORMAT_NUMBER(value);

export const formatPercentage = (value) => FORMAT_PERCENTAGE(value);
