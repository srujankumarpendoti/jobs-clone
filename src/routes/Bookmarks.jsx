import { useEffect } from "react";
import { useDispatch } from "react-redux";
import JobCard from "../components/JobCard";
import { BookmarksActions } from "../store/bookmarksSlice";
import { useState } from "react";

const Bookmarks = () => {
  const dispatch = useDispatch();
  const [bookmarksList, setBookmarksList] = useState([]);
  useEffect(() => {
    const loadBookmarks = async () => {
      const storedBookmarks = await localStorage.getItem("bookmarks");
      if (storedBookmarks) {
        setBookmarksList(JSON.parse(storedBookmarks));
        dispatch(
          BookmarksActions.loadBookmarksFromLocalStorage(
            JSON.parse(storedBookmarks)
          )
        );
      }
    };

    loadBookmarks();
  }, []);
  return (
    <>
      {bookmarksList.length === 0 ? (
        <h1>No jobs bookmarked yet.</h1>
      ) : (
        <div className="jobs-container">
          <h1 className="job-list-heading">Bookmarked Jobs List</h1>
          {bookmarksList.map((job) => (
            <JobCard key={job.id} jobDetails={job} />
          ))}
        </div>
      )}
    </>
  );
};

export default Bookmarks;
