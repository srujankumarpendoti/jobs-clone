import { Link } from "react-router-dom";
import { TbMoneybag } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const JobCard = ({ jobDetails }) => {
  const { id, job_role, job_location_slug, primary_details, whatsapp_no } =
    jobDetails;

  const contact_no =
    whatsapp_no === null ? "Number Not Mentioned" : whatsapp_no;

  const salary =
    primary_details.Salary === "-"
      ? "Not Disclosed"
      : `${primary_details.Salary} P.M.`;

  return (
    <Link to={`/job/${id}`} className="jobcard-container ">
      <h1>{job_role}</h1>

      <div className="">
        <div className="">
          <FaLocationDot />
          <span className="mx-2">{job_location_slug}</span>
        </div>
        <div className="">
          <TbMoneybag />
          <span className="mx-2">{salary} </span>
        </div>
        <div className="">
          <IoCall />
          <span className="mx-2">{contact_no}</span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
