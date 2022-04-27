import { createSlice } from '@reduxjs/toolkit';

const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState: {
    searchQuery: '',
    isFocused: false,
  },
  reducers: {
    setQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    changeIsFocused: (state) => {
      state.isFocused = !state.isFocused;
    },
  },
});

export const { setQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
