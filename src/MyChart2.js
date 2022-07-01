import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLine } from 'victory';

const data = [
  { quarter: 1, amount: 125 },
  { quarter: 2, amount: 390 },
  { quarter: 3, amount: 505 },
  { quarter: 4, amount: 990 }
];

export default function MyChart2() {
  return (
    <div className='chart-two'>
      <VictoryChart domainPadding={25}>
        <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['Jan', 'Feb', 'March', 'April']}/>
        <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 100}k`)} />
        <VictoryLine data={data} x="quarter" y="amount"/>
      </VictoryChart>
    </div>
  );}