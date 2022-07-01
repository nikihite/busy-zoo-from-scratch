import React from 'react';
import MyCharts from './MyChart';
import MyChart2 from './MyChart2';
import { Link } from 'react-router-dom';
import MyTable from './MyTable';

export default function Admin() {
  return (
    <div>
      <Link to="/">Shrek</Link>
      <h2 className='chart-header'>Favorite Color</h2>
      <MyCharts/>
      <h2 className='chart-header'>Savings</h2>
      <MyChart2/>
      <h2 className='chart-header'>City Table</h2>
      <MyTable/>
    </div>
  );
}
