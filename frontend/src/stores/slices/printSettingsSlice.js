import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  layerHeight: 0.2,
  infillDensity: 20,
  nozzleTemp: 200,
  bedTemp: 60,
  supportEnabled: false,
  supportDensity: 15,
  minWallThickness: 1.2,
};

const printSettingsSlice = createSlice({
  name: 'printSettings',
  initialState,
  reducers: {
    updateLayerHeight: (state, action) => {
      state.layerHeight = action.payload;
    },
    updateInfillDensity: (state, action) => {
      state.infillDensity = action.payload;
    },
    updateNozzleTemp: (state, action) => {
      state.nozzleTemp = action.payload;
    },
    updateBedTemp: (state, action) => {
      state.bedTemp = action.payload;
    },
    toggleSupports: (state) => {
      state.supportEnabled = !state.supportEnabled;
    },
    updateSupportDensity: (state, action) => {
      state.supportDensity = action.payload;
    },
    updateMinWallThickness: (state, action) => {
      state.minWallThickness = action.payload;
    },
  },
});

export const {
  updateLayerHeight,
  updateInfillDensity,
  updateNozzleTemp,
  updateBedTemp,
  toggleSupports,
  updateSupportDensity,
  updateMinWallThickness,
} = printSettingsSlice.actions;
export default printSettingsSlice.reducer;