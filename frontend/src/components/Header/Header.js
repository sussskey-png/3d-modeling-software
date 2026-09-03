import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../../stores/slices/uiSlice';
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const projectName = useSelector(state => state.model.projectName);

  return (
    <div className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={() => dispatch(toggleSidebar())}>
          ☰
        </button>
        <h1 className="project-title">{projectName}</h1>
      </div>
      <div className="header-center">
        <span className="app-name">3D Modeling Software</span>
      </div>
      <div className="header-right">
        <button className="header-btn">File</button>
        <button className="header-btn">Edit</button>
        <button className="header-btn">View</button>
        <button className="header-btn">Help</button>
      </div>
    </div>
  );
}

export default Header;