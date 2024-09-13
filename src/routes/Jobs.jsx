import { useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";
import NoJobs from "../components/NoJobs";

const Jobs = () => {
  const jobCards = useSelector((store) => store.jobs);

  return (
    <>
      {jobCards.length === 0 ? (
        <NoJobs />
      ) : (
        <div className="jobs-container">
          <h1 className="job-list-heading"> Jobs List</h1>
          {jobCards.map((job) => {
            if (job.id !== undefined) {
              return <JobCard key={job.id} jobDetails={job} />;
            }
          })}
        </div>
      )}
      <Pagination />
    </>
  );
};

export default Jobs;
