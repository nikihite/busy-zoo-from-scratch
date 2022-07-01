import { VictoryBar, VictoryChart } from 'victory';
import { customers } from './data';

const countMap = customers.reduce((acc, curr) => {
  if (acc[curr.city]) {
    acc[curr.city]++;
  } else {
    acc[curr.city] = 1;
  }

  return acc;
}, {});

const chartData = Object.keys(countMap).map(key => ({
  city: key, count: countMap[key]
}));

export default function MyCharts() {
  return (
    <VictoryChart domainPadding={20}>
      <VictoryBar data={chartData}
        x="city" y="country" />
    </VictoryChart>
  );
}