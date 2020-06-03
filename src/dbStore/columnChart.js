import Dexie from 'dexie';

const ColumnChart = new Dexie('columnChart');
ColumnChart.version(0.2).stores({
  options: 'title,tooltip,tooltip,xAxis,yAxis,series',
});
const AddColumuChart = () =>
  ColumnChart.options.add({
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    tooltip: {
      data: ['销量'],
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
