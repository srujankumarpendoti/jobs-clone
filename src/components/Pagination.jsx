import { useDispatch, useSelector } from "react-redux";
import { PaginationActions } from "../store/paginationSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const pageValue = useSelector((store) => store.page);

  const disabled = pageValue === 1 ? "disabled" : "";

  const handleValue = (event) => {
    const updatedValue = Number(event.target.textContent);
    dispatch(PaginationActions.updateValue(updatedValue));
  };
  const handlePrevious = () => {
    const updatedValue = pageValue - 1;
    dispatch(PaginationActions.updateValue(updatedValue));
  };
  const handleNext = () => {
    const updatedValue = pageValue + 1;
    dispatch(PaginationActions.updateValue(updatedValue));
  };
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${disabled}`}>
          <a onClick={handlePrevious} className="page-link">
            Previous
          </a>
        </li>
        <li className="page-item active">
          <a onClick={handleValue} className="page-link" href="#">
            {pageValue}
          </a>
        </li>
        <li className="page-item " aria-current="page">
          <a onClick={handleValue} className="page-link" href="#">
            {pageValue + 1}
          </a>
        </li>
        <li className="page-item">
          <a onClick={handleValue} className="page-link" href="#">
            {pageValue + 2}
          </a>
        </li>
        <li className="page-item">
          <a onClick={handleNext} className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
