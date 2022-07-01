import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLine } from 'victory';

const data = [
  { quarter: 1, amount: 83 },
  { quarter: 2, amount: 60 },
  { quarter: 3, amount: 32 },
  { quarter: 4, amount: 51 }
];

export default function MyChart2() {
  return (
    <div className='chart-two'>
      <VictoryChart domainPadding={25}>
        <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['Blue', 'Red', 'Pink', 'Orange']}/>
        <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 100}`)} />
        <VictoryLine data={data} x="quarter" y="amount"/>
      </VictoryChart>
    </div>
  );}