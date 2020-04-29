import { timeFormat } from 'd3-time-format';

export const isValidDate = (d) => d instanceof Date && !isNaN(d);

export const dateFormat = timeFormat('%x');
