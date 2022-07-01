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
  city: key, country: countMap[key]
}));

export default function MyCharts() {
  return (
    <div className='chart-one'>
      <VictoryChart domainPadding={20}>
        <VictoryBar horizontal style={{ data: { fill: '#c43a31' } }} data={chartData}
          x="city" y="country" />
      </VictoryChart>
    </div>
  );
}