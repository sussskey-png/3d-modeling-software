import React from 'react';
import './Toolbar.css';

function Toolbar({ onAddShape }) {
  return (
    <div className="toolbar">
      <div className="toolbar-section">
        <h4 className="toolbar-title">Add Shapes</h4>
        <div className="toolbar-buttons">
          <button className="toolbar-btn" onClick={() => onAddShape('cube')} title="Add Cube">
            □
          </button>
          <button className="toolbar-btn" onClick={() => onAddShape('sphere')} title="Add Sphere">
            ●
          </button>
          <button className="toolbar-btn" onClick={() => onAddShape('cylinder')} title="Add Cylinder">
            ⊕
          </button>
          <button className="toolbar-btn" onClick={() => onAddShape('cone')} title="Add Cone">
            △
          </button>
        </div>
      </div>
      <hr />
      <div className="toolbar-section">
        <h4 className="toolbar-title">Tools</h4>
        <div className="toolbar-buttons">
          <button className="toolbar-btn" title="Select Tool">↖</button>
          <button className="toolbar-btn" title="Move Tool">↔</button>
          <button className="toolbar-btn" title="Rotate Tool">⟳</button>
          <button className="toolbar-btn" title="Scale Tool">↗</button>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;