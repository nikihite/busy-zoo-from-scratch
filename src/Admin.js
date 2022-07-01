import { customers } from './data';
import React from 'react';
import { VictoryChart } from 'victory';

const countMap = customers.reduce((acc, curr) => {
  if (acc[curr.movie_title]) {
    acc[curr.movie_title] ++;
  } else {
    acc [curr.movie_title] = 1;
  }
  return acc;
}, {});

const chartData = Object.keys(countMap).map(key => ({
  pet_type: key, count: countMap[key]
}));

export default function myChart(){
  return (
    <VictoryChart data={chartData}>
    </VictoryChart>
  );
}