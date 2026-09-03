import { configureStore } from '@reduxjs/toolkit';
import modelReducer from './slices/modelSlice';
import uiReducer from './slices/uiSlice';
import printSettingsReducer from './slices/printSettingsSlice';

const store = configureStore({
  reducer: {
    model: modelReducer,
    ui: uiReducer,
    printSettings: printSettingsReducer,
  },
});

export default store;