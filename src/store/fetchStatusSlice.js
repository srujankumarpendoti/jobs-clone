import { createSlice } from "@reduxjs/toolkit";
const FetchStatusSlice = createSlice({
  name: "fetching",
  initialState: {
    fetchingData: false,
    errorMessage: "",
  },
  reducers: {
    fetchingDone: (state, action) => {
      state.fetchingData = action.payload;
    },
    errorMessageStatus: (state, action) => {
      console.log(action.payload);
      state.errorMessage = action.payload;
    },
  },
});
export const FetchStatusActions = FetchStatusSlice.actions;
export default FetchStatusSlice;
