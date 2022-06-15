import { createSlice } from '@reduxjs/toolkit';

export const productFilterSlice = createSlice({
  name: 'productFilter',
  initialState: {
    filter: {},
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = productFilterSlice.actions;
export default productFilterSlice.reducer;
