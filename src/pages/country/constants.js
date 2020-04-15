import React from 'react';

import CardInfo from 'components/card';

import Summary from 'pages/country/category/summary';
import WorkAndEconomy from 'pages/country/category/w&e';
import Health from 'pages/country/category/health';
import Policits from 'pages/country/category/politics';
import Mobility from 'pages/country/category/mobility';
import Awareness from 'pages/country/category/awareness';

const TabsInfo = [
  {
    name: 'Summary',
    category: 'summary',
    content: <CardInfo info={Summary} />,
  },
  {
    name: 'Work and Economy',
    category: 'w&e',
    content: <CardInfo info={WorkAndEconomy} />,
  },
  {
    name: 'Health',
    category: 'health',
    content: <CardInfo info={Health} />,
  },
  {
    name: 'Politics',
    category: 'politics',
    content: <CardInfo info={Policits} />,
  },
  {
    name: 'Mobility',
    category: 'mobility',
    content: <CardInfo info={Mobility} />,
  },
  {
    name: 'Awareness',
    category: 'awareness',
    content: <CardInfo info={Awareness} />,
  },
];

export default TabsInfo;
