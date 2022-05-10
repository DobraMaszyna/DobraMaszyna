import { createSlice } from '@reduxjs/toolkit';

const recentlyViewedSlice = createSlice({
  name: 'recentlyViewed',
  initialState: {
    recentlyViewed: [],
  },
  reducers: {
    addViewedProduct: (state, action) => {
      state.recentlyViewed = [action.payload, ...state.recentlyViewed];

      if (state.recentlyViewed.lenght > 6) {
        state.recentlyViewed.pop();
      }
    },
  },
});

export const { addViewedProduct } = recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer;
