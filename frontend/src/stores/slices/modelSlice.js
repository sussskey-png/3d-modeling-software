import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  objects: [],
  selectedObject: null,
  projectName: 'Untitled Project',
};

const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    addObject: (state, action) => {
      state.objects.push(action.payload);
    },
    removeObject: (state, action) => {
      state.objects = state.objects.filter(obj => obj.id !== action.payload);
    },
    selectObject: (state, action) => {
      state.selectedObject = action.payload;
    },
    updateObject: (state, action) => {
      const index = state.objects.findIndex(obj => obj.id === action.payload.id);
      if (index !== -1) {
        state.objects[index] = { ...state.objects[index], ...action.payload };
      }
    },
    setProjectName: (state, action) => {
      state.projectName = action.payload;
    },
    clearScene: (state) => {
      state.objects = [];
      state.selectedObject = null;
    },
  },
});

export const { addObject, removeObject, selectObject, updateObject, setProjectName, clearScene } = modelSlice.actions;
export default modelSlice.reducer;