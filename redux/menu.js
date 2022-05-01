import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    shown: false,
  },
  reducers: {
    changeState: (state) => {
      state.shown = !state.shown;
    },
  },
});

export const { changeState } = menuSlice.actions;
export default menuSlice.reducer;
