import { createSlice } from "@reduxjs/toolkit";

const BookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: [],
  reducers: {
    addBookmark: (store, action) => {
      store.push(action.payload);
    },
    saveBookmarksToLocalStorage: (store) => {
      localStorage.setItem("bookmarks", JSON.stringify(store));
    },
    loadBookmarksFromLocalStorage: (store) => {
      const savedBookmarks = localStorage.getItem("bookmarks");
      if (savedBookmarks) {
        return JSON.parse(savedBookmarks);
      } else {
        return store;
      }
    },
  },
});
export const BookmarksActions = BookmarksSlice.actions;

export default BookmarksSlice;
