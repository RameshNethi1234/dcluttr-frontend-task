import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Statcards from '../Statcards/Statcards';
import './Layout.css';
import Table1 from '../Tables/Table1/Table1';
import Table2 from '../Tables/Table2/Table2';
import MiniSideBar from '../Minisidebar/Minisidebar';

const Layout = () => {
  return (
    <div className="layout">
      <MiniSideBar/>
      <Sidebar />
      <div className="main-content">
        <Header />
        <Navbar />
        <div className="statcards-container">
          <Statcards />
        </div>
        <div className="table1-container">
          <Table1 />
        </div>
        <div className="table2-container">
          <Table2 />
        </div>
      </div>
    </div>
  );
};

export default Layout;
