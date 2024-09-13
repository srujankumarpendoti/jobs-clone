import { createSlice } from "@reduxjs/toolkit";

const JobsSlice = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    addInitialJobs: (store, action) => {
      return action.payload;
    },
  },
});

export const JobsActions = JobsSlice.actions;
export default JobsSlice;
