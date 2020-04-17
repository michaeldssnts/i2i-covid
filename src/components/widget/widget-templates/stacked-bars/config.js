import 'styles/settings';
import React from 'react';
import WidgetLegend from 'components/widget-legend';
import WidgetTooltip from 'components/widget-tooltip';

const bars = [
  {
    name: 'Increasing',
    color: '#BFD630',
  },
  {
    name: 'Fluctuating',
    color: '#0282B0',
  },
  {
    name: 'Stable',
    color: '#5DBEE1',
  },
  {
    name: 'Decreasing',
    color: '#EB6240',
  },
];

const GetYKeysBars = (data) => {
  data.reduce((acc, d) => {
    return {
      ...acc,
      [d.name]: {
        stackId: 'bar',
        fill: d.color,
        stroke: d.color,
        isAnimationActive: false,
      },
    };
  }, {});
};

const getSettingsTooltip = (data) => {
  data.reduce((acc, d) => {
    return {
      ...acc,
      label: d.name,
      color: d.color,
      key: d.name,
      // format: value => `${numberFormat(value)} %`, position: '_column', type: '_stacked' },
    };
  }, []);
};

const getData = (data) =>
  data.reduce((acc, d) => {
    return {
      ...acc,
      label: d.label,
      value: d.value,
      [d.label]: d.value,
      name: d.unit,
    };
  }, {});

const getBars = (barValues) => {
  if (!barValues) return null;
  const barsData = Object.values(looseJsonParse(barValues));
  const chnkedData = chunk(barsData, 5);
  let formattedData = chnkedData.map((r) => r.reduce((previous, current) => current + previous));
  const total = barsData.reduce((previous, current) => current + previous);
  formattedData = formattedData.map((data) => data / total);
  return formattedData;
};

const histogramData = (data) => {
  if (!data) {
    return null;
  }
  const histogram = data.map((d) => ({
    increasing: getBars(d.total)[0] * 100,
    fluctuating: getBars(d.total)[1] * 100,
    stable: getBars(d.total)[2] * 100,
    decreasing: getBars(d.total)[3] * 100,
  }));
  return histogram;
};

const heightCoverage = (data, date) => {
  const yearData = data.find((d) => d.date.includes(date));
  if (!yearData) return null;
  return yearData.hmax_m.toFixed(2);
};

const metaData = (data) => Array.from(new Set(data.map((d) => moment(d.date).year())));

export const CONFIG = {
  parse: (data) => {
    {
      return {
        chartData: histogramData(data),
        heightCoverage: heightCoverage(dataFiltered, date),
        metadata: metaData(dataFiltered),
        chartConfig: {
          height: 360,
          cartesianGrid: {
            vertical: false,
            horizontal: true,
            strokeDasharray: '5 20',
          },
          margin: { top: 20, right: 0, left: 0, bottom: 20 },
          xKey: 'year',
          yKeys: {
            bars: getYKeysBars(bars),
          },
          referenceLines: [
            {
              y: 0,
              stroke: 'black',
              strokeDasharray: 'solid',
              fill: 'black',
              opacity: '1',
              label: null,
            },
          ],
          xAxis: {
            tick: {
              fontSize: 12,
              lineHeight: 20,
              fill: 'rgba(0, 0, 0, 0.54)',
            },
            ticks: metaData(data),
            interval: 0,
          },
          yAxis: {
            tick: {
              fontSize: 12,
              fill: 'rgba(0,0,0,0.54)',
            },
            width: 40,
            tickFormatter: (value) => Math.round(value),
            domain: [0, 100],
            interval: 0,
            orientation: 'right',
            label: {
              value: '%',
              position: 'top',
              offset: 25,
            },
            type: 'number',
          },
          legend: {
            align: 'left',
            verticalAlign: 'top',
            layout: 'horizontal',
            height: 80,
            top: 0,
            left: 0,
            position: 'relative',
            content: (properties) => {
              const { payload } = properties;
              const groups = groupBy(payload, (p) => p.payload);
              return <WidgetLegend type="height" groups={groups} />;
            },
          },
          tooltip: {
            cursor: false,
            content: (
              <WidgetTooltip
                type="column"
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexDirection: 'column',
                }}
                settings={getSettingsTooltip(bars)}
                label={{ key: 'name' }}
              />
            ),
          },
        },
      };
    }
  },
};

export default CONFIG;
