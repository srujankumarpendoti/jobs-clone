import { createSlice } from "@reduxjs/toolkit";

const JobDetailsSlice = createSlice({
  name: "jobDetails",
  initialState: [],
  reducers: {
    viewJobDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const JobDetailsActions = JobDetailsSlice.actions;
export default JobDetailsSlice;
