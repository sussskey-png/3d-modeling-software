import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarOpen: true,
  selectedTool: 'select',
  showGrid: true,
  showAxes: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSelectedTool: (state, action) => {
      state.selectedTool = action.payload;
    },
    toggleGrid: (state) => {
      state.showGrid = !state.showGrid;
    },
    toggleAxes: (state) => {
      state.showAxes = !state.showAxes;
    },
  },
});

export const { toggleSidebar, setSelectedTool, toggleGrid, toggleAxes } = uiSlice.actions;
export default uiSlice.reducer;