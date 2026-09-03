import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Viewport from '../Viewport/Viewport';
import './MainLayout.css';

function MainLayout() {
  const sidebarOpen = useSelector(state => state.ui.sidebarOpen);

  return (
    <div className="main-layout">
      <Header />
      <div className="layout-content">
        {sidebarOpen && <Sidebar />}
        <Viewport />
      </div>
    </div>
  );
}

export default MainLayout;