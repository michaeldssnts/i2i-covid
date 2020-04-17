import React from 'react';

import CardInfo from 'components/card';

import Summary from 'pages/country/category/summary';
import WorkAndEconomy from 'pages/country/category/w&e';
import Health from 'pages/country/category/health';
import Policits from 'pages/country/category/politics';
import Migration from 'pages/country/category/migration';
import Awareness from 'pages/country/category/awareness';

const TabsInfo = [
  {
    name: 'Summary',
    category: 'summary',
    filters: false,
    content: <CardInfo info={Summary} />,
  },
  {
    name: 'Work and Economy',
    category: 'w&e',
    filters: true,
    content: <CardInfo info={WorkAndEconomy} />,
  },
  {
    name: 'Healthcare access',
    category: 'healthcare-access',
    filters: true,
    content: <CardInfo info={Health} />,
  },
  {
    name: 'Politics',
    category: 'politics',
    filters: true,
    content: <CardInfo info={Policits} />,
  },
  {
    name: 'Migration',
    category: 'migration',
    filters: true,
    content: <CardInfo info={Migration} />,
  },
  {
    name: 'Awareness',
    category: 'awareness',
    filters: true,
    content: <CardInfo info={Awareness} />,
  },
];

export default TabsInfo;
