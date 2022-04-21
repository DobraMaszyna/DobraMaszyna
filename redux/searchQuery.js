import { createSlice } from '@reduxjs/toolkit';

const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState: {
    searchQuery: '',
  },
  reducers: {
    setQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
