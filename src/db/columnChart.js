import Dexie from 'dexie';
import ChartDataGenterate from './../utils/date';

const ColumnChartDB = new Dexie('charts');
ColumnChartDB.version(2).stores({
  options: 'name,title,tooltip,tooltip,xAxis,yAxis,series',
});

ColumnChartDB.options.transaction('rw', ColumnChartDB.options, async () => {
  /**
   * @type {Number}
   * */

  const dayFlowNumber = await ColumnChartDB.options
    .where({ title: '日流量' })
    .count();
  if (dayFlowNumber != 0) {
    await ColumnChartDB.options.add({
      title: {
        text: '日流量',
      },
      tooltip: {},
      legend: {
        data: ['日流量'],
      },
      xAxis: {
        data: [112, 3123, 1, 23],
      },
      yAxis: {},
      series: [
        {
          name: '日流量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }
});

export default ColumnChartDB;
