import React from 'react';
import './StatCards.css';
import SalesChart from '../Charts/Saleschart';
import QuantityChart from '../Charts/Quantitychart';
import CitiesChart from '../Charts/Citieschart';

const StatCards = () => {
  return (
    <div className="stat-cards-container">
      <div className="charts-container">
        <div className="chart-wrapper">
          <h3 className="chart-heading">Sales (MRP)</h3>
          <SalesChart data={[
            { month: '09', thisMonth: 1.5, lastMonth: 1.8 },
            { month: '10', thisMonth: 2.0, lastMonth: 2.2 },
            { month: '11', thisMonth: 2.8, lastMonth: 2.5 },
            { month: '12', thisMonth: 3.2, lastMonth: 3.0 },
            { month: '13', thisMonth: 3.5, lastMonth: 3.3 },
            { month: '14', thisMonth: 4.0, lastMonth: 3.8 },
            { month: '15', thisMonth: 4.5, lastMonth: 4.2 },
          ]} />
        </div>
        <div className="chart-wrapper">
          <h3 className="chart-heading">Total Quantity Sold</h3>
          <QuantityChart data={[
            { month: '09', thisMonth: 1.7, lastMonth: 1.9 },
            { month: '10', thisMonth: 2.1, lastMonth: 2.3 },
            { month: '11', thisMonth: 2.9, lastMonth: 2.6 },
            { month: '12', thisMonth: 3.3, lastMonth: 3.1 },
            { month: '13', thisMonth: 3.6, lastMonth: 3.4 },
            { month: '14', thisMonth: 4.1, lastMonth: 3.9 },
            { month: '15', thisMonth: 4.6, lastMonth: 4.3 },
          ]} />
        </div>
        <div className="chart-wrapper">
          <h3 className="chart-heading">Top Cities</h3>
          <CitiesChart data={[
            { name: 'New Delhi', value: 26.5, percentage: 35, increase: 1.2 },
            { name: 'Mumbai', value: 36.4, percentage: 23, increase: 3.3 },
            { name: 'West Bengal', value: 12.2, percentage: 21, increase: 2.3 },
            { name: 'Others', value: 24.3, percentage: 9, increase: 1.09 },
          ]} />
        </div>
      </div>
    </div>
  );
};

export default StatCards;