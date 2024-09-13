import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import { BookmarksActions } from "../store/bookmarksSlice";

const Bookmarks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BookmarksActions.loadBookmarksFromLocalStorage());
  }, []);
  const bookmarksList = useSelector((store) => store.bookmarks);
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
