import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JobsActions } from "../store/jobsSlice";
import { FetchStatusActions } from "../store/fetchStatusSlice";

const FetchJobsList = () => {
  const dispatch = useDispatch();
  const pageValue = useSelector((store) => store.page);
  useEffect(() => {
    dispatch(FetchStatusActions.fetchingDone(true));

    fetch(`https://testapi.getlokalapp.com/common/jobs?page=${pageValue}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(FetchStatusActions.fetchingDone(false));
        dispatch(JobsActions.addInitialJobs(data.results));
      });
    // .catch((error) => {
    //   // console.log("Error fetching jobs:", error);
    //   dispatch(FetchStatusActions.fetchingDone(false));
    // });
  }, [pageValue]);
  return <></>;
};

export default FetchJobsList;
