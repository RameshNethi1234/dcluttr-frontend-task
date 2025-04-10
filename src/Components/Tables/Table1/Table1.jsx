import React from 'react';
import './Table1.css';

const Table1 = () => {
  const tableData = [
    {
      skuName: 'Protein Bar 100g',
      sales: '₹93,132.12',
      outOfStock: '1.68%',
      totalInventory: '931.9',
      averageRank: '3.2',
      estTraffic: '12,303',
      estImpressions: '25,005',
    },
    {
      skuName: 'Choco Bar 100g',
      sales: '₹8,526.32',
      outOfStock: '6.79%',
      totalInventory: '679',
      averageRank: '7',
      estTraffic: '3005',
      estImpressions: '4231',
    },
    {
      skuName: 'Choco Bar 100g',
      sales: '₹7,012.72',
      outOfStock: '3.28%',
      totalInventory: '328',
      averageRank: '4',
      estTraffic: '2960',
      estImpressions: '3657',
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
      <div className="table-header-group">
        <div className="table-header">
          <h2>SKU level data</h2>
          <p>Analytics for all your SKUs</p>
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
              <td style={{ width: '8.33%' }}>{row.sales}</td>
              <td style={{ width: '8.33%' }}>{row.outOfStock}</td>
              <td style={{ width: '8.33%' }}>{row.totalInventory}</td>
              <td style={{ width: '8.33%' }}>{row.averageRank}</td>
              <td style={{ width: '8.33%' }}>{row.estTraffic}</td>
              <td style={{ width: '8.33%' }}>{row.estImpressions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table1;