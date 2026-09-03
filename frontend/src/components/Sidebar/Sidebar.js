import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addObject } from '../../stores/slices/modelSlice';
import { setSelectedTool } from '../../stores/slices/uiSlice';
import { v4 as uuidv4 } from 'uuid';
import Toolbar from './Toolbar';
import ObjectsList from './ObjectsList';
import PrintSettings from './PrintSettings';
import './Sidebar.css';

function Sidebar() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = React.useState('objects');

  const addShape = (type) => {
    const newObject = {
      id: uuidv4(),
      type,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)}_${Date.now()}`,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    };
    dispatch(addObject(newObject));
  };

  return (
    <div className="sidebar">
      <Toolbar onAddShape={addShape} />
      
      <div className="sidebar-tabs">
        <button 
          className={`tab-btn ${activeTab === 'objects' ? 'active' : ''}`}
          onClick={() => setActiveTab('objects')}
        >
          Objects
        </button>
        <button 
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Print Settings
        </button>
      </div>

      <div className="sidebar-content">
        {activeTab === 'objects' && <ObjectsList />}
        {activeTab === 'settings' && <PrintSettings />}
      </div>
    </div>
  );
}

export default Sidebar;