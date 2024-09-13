import { configureStore } from "@reduxjs/toolkit";
import JobsSlice from "./jobsSlice";
import BookmarksSlice from "./bookmarksSlice";
import PaginationSlice from "./paginationSlice";
import FetchStatusSlice from "./fetchStatusSlice";

const JobsClone = configureStore({
  reducer: {
    jobs: JobsSlice.reducer,
    bookmarks: BookmarksSlice.reducer,
    page: PaginationSlice.reducer,
    fetching: FetchStatusSlice.reducer,
  },
});

export default JobsClone;
