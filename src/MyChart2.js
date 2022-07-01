import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLine } from 'victory';

const data = [
  { quarter: 1, amount: 35 },
  { quarter: 2, amount: 27 },
  { quarter: 3, amount: 45 },
  { quarter: 4, amount: 57 }
];

export default function MyChart2() {
  return (
    <div className='chart-two'>
      <VictoryChart domainPadding={25}>
        <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}/>
        <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)} />
        <VictoryLine data={data} x="quarter" y="amount"/>
      </VictoryChart>
    </div>
  );
}