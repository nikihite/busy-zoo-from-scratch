import { VictoryBar, VictoryChart } from 'victory';
import { customers } from './data';

const countMap = customers.reduce((acc, curr) => {
  if (acc[curr.movie_title]) {
    acc[curr.movie_title]++;
  } else {
    acc[curr.movie_title] = 1;
  }

  return acc;
}, {});

const chartData = Object.keys(countMap).map(key => ({
  movie_title: key, count: countMap[key]
}));

export default function MyCharts() {
  return (
    <VictoryChart domainPadding={20}>
      <VictoryBar data={chartData}
        x="movie_title" y="country" />
    </VictoryChart>
  );
}