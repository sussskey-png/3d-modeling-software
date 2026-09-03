import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateLayerHeight,
  updateInfillDensity,
  updateNozzleTemp,
  updateBedTemp,
  toggleSupports,
  updateSupportDensity,
} from '../../stores/slices/printSettingsSlice';
import './PrintSettings.css';

function PrintSettings() {
  const settings = useSelector(state => state.printSettings);
  const dispatch = useDispatch();

  return (
    <div className="print-settings">
      <div className="setting-group">
        <label>Layer Height (mm)</label>
        <input
          type="number"
          min="0.1"
          max="0.4"
          step="0.05"
          value={settings.layerHeight}
          onChange={(e) => dispatch(updateLayerHeight(parseFloat(e.target.value)))}
        />
        <span className="value-display">{settings.layerHeight.toFixed(2)}</span>
      </div>

      <div className="setting-group">
        <label>Infill Density (%)</label>
        <input
          type="range"
          min="0"
          max="100"
          value={settings.infillDensity}
          onChange={(e) => dispatch(updateInfillDensity(parseInt(e.target.value)))}
        />
        <span className="value-display">{settings.infillDensity}%</span>
      </div>

      <div className="setting-group">
        <label>Nozzle Temperature (°C)</label>
        <input
          type="number"
          min="150"
          max="250"
          value={settings.nozzleTemp}
          onChange={(e) => dispatch(updateNozzleTemp(parseInt(e.target.value)))}
        />
        <span className="value-display">{settings.nozzleTemp}°C</span>
      </div>

      <div className="setting-group">
        <label>Bed Temperature (°C)</label>
        <input
          type="number"
          min="20"
          max="110"
          value={settings.bedTemp}
          onChange={(e) => dispatch(updateBedTemp(parseInt(e.target.value)))}
        />
        <span className="value-display">{settings.bedTemp}°C</span>
      </div>

      <div className="setting-group checkbox">
        <label>
          <input
            type="checkbox"
            checked={settings.supportEnabled}
            onChange={() => dispatch(toggleSupports())}
          />
          Enable Supports
        </label>
      </div>

      {settings.supportEnabled && (
        <div className="setting-group">
          <label>Support Density (%)</label>
          <input
            type="range"
            min="5"
            max="30"
            value={settings.supportDensity}
            onChange={(e) => dispatch(updateSupportDensity(parseInt(e.target.value)))}
          />
          <span className="value-display">{settings.supportDensity}%</span>
        </div>
      )}
    </div>
  );
}

export default PrintSettings;