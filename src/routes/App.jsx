import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import FetchJobsList from "../components/FetchJobsList";

function App() {
  const fetching = useSelector((store) => store.fetching);
  return (
    <div className="home-container">
      <Header />
      <FetchJobsList />

      <main>
        {fetching.fetchingData ? (
          <LoadingSpinner />
        ) : fetching.errorMessage !== "" ? (
          <ErrorMessage />
        ) : (
          <Outlet />
        )}
        {/*  */}
      </main>

      <Navbar />
    </div>
  );
}

export default App;
