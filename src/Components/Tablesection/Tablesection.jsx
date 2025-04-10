import React from 'react';
import './TableSection.css';

const TableSection = () => {
  return (
    <div className="table-section">
      <h2>Order Details</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Phone</td>
            <td>$500</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>Alice</td>
            <td>Watch</td>
            <td>$300</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableSection;
