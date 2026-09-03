import React from 'react';
import './WinControls.css';

function WinControls() {
  const isElectron = () => {
    return typeof window !== 'undefined' && typeof window.process === 'object';
  };

  if (!isElectron() || process.env.NODE_ENV === 'development') {
    return null;
  }

  return (
    <div className="win-controls">
      <button
        className="win-btn minimize-btn"
        onClick={() => window.electron.minimize()}
        title="Minimize"
      >
        –
      </button>
      <button
        className="win-btn maximize-btn"
        onClick={() => window.electron.maximize()}
        title="Maximize"
      >
        □
      </button>
      <button
        className="win-btn close-btn"
        onClick={() => window.electron.close()}
        title="Close"
      >
        ✕
      </button>
    </div>
  );
}

export default WinControls;