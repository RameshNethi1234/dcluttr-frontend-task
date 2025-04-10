import React from 'react';
import './Table2.css';

const Table2 = () => {
  const tableData = [
    {
      skuName: 'Delhi',
      sales: '₹93,132.12',
      outOfStock: '1.68%',
      totalInventory: '931.9',
      averageRank: '3.2',
      estTraffic: '12,303',
      estImpressions: '25,005',
    },
    {
      skuName: 'Bengaluru',
      sales: '₹8,526.32\n₹7,012.72',
      outOfStock: '6.79%\n3.28%',
      totalInventory: '679\n-',
      averageRank: '7\n4',
      estTraffic: '3005\n2960',
      estImpressions: '4231\n3657',
    },
    {
      skuName: 'SKU 3',
      sales: '₹9313',
      outOfStock: '1.68%',
      totalInventory: '931.9',
      averageRank: '11',
      estTraffic: '1931.9',
      estImpressions: '₹931.9',
    },
    {
      skuName: 'SKU 4',
      sales: '₹0',
      outOfStock: '0',
      totalInventory: '0',
      averageRank: '0',
      estTraffic: '₹0',
      estImpressions: '₹0',
    },
    {
      skuName: 'Total',
      sales: '₹2,93,132.12',
      outOfStock: '16%',
      totalInventory: '2931',
      averageRank: '8.3',
      estTraffic: '61,985',
      estImpressions: '2,61,768',
    },
  ];

  return (
    <div className="data-table-container">
      <div className="table-header-group"> {/* Group header elements */}
        <div className="table-header">
          <h2>City level data</h2>
          <p>Analytics for all your Cities</p>
        </div>
        <button className="filters-button">Filters(1)</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th style={{ width: '25%', verticalAlign: 'middle' }} rowSpan="2">
              <input type="checkbox" /> SKU Name
            </th>
            <th style={{ width: '25%' }} colSpan="3">
              Availability
            </th>
            <th style={{ width: '25%' }} colSpan="3">
              Visibility
            </th>
          </tr>
          <tr>
            <th style={{ width: '8.33%' }}>Sales</th>
            <th style={{ width: '8.33%' }}>Out of Stock</th>
            <th style={{ width: '8.33%' }}>Total Inventory</th>
            <th style={{ width: '8.33%' }}>Average Rank</th>
            <th style={{ width: '8.33%' }}>Est. Traffic</th>
            <th style={{ width: '8.33%' }}>Est. Impressions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td style={{ width: '25%' }}>
                <input type="checkbox" /> {row.skuName}
              </td>
              <td style={{ width: '8.33%' }}>
                {row.sales.split('\n').map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </td>
              <td style={{ width: '8.33%' }}>
                {row.outOfStock.split('\n').map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </td>
              <td style={{ width: '8.33%' }}>
                {row.totalInventory.split('\n').map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </td>
              <td style={{ width: '8.33%' }}>
                {row.averageRank.split('\n').map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </td>
              <td style={{ width: '8.33%' }}>
                {row.estTraffic.split('\n').map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </td>
              <td style={{ width: '8.33%' }}>
                {row.estImpressions.split('\n').map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;