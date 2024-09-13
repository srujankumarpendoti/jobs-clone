import { createSlice } from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
  name: "page",
  initialState: 1,
  reducers: {
    updateValue: (store, action) => {
      return action.payload;
    },
    previousValue: (store, action) => {
      return action.payload;
    },
    nextValue: (store, action) => {
      return action.payload;
    },
  },
});

export const PaginationActions = PaginationSlice.actions;

export default PaginationSlice;
