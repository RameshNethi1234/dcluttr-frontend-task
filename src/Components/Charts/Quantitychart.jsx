import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chartstyles.css'; // Import shared styles

const QuantityChart = ({ data }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Month ${label}`}</p>
          <p style={{ color: '#8884d8' }}>{`This Month: ${payload[0].value}`}</p>
          <p style={{ color: '#82ca9d' }}>{`Last Month: ${payload[1].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <div>
          <p className="chart-value">125.49</p>
          <p className="chart-percentage">▲ 2.4% vs 119.69 last month</p>
        </div>
        <div className="chart-increase">▲ 2.4%</div>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="thisMonth" stroke="#8884d8" name="This Month" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="lastMonth" stroke="#82ca9d" name="Last Month" strokeWidth={2} dot={false} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-color-indicator this-month"></div>
          <span>This Month</span>
        </div>
        <div className="legend-item">
          <div className="legend-color-indicator last-month"></div>
          <span>Last Month</span>
        </div>
      </div>
    </div>
  );
};

export default QuantityChart;