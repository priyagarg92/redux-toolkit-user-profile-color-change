import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeColor(state, action) {
      state.value = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
