import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bookmarks from "./routes/Bookmarks.jsx";
import { Provider } from "react-redux";
import JobsClone from "./store/index.js";
import JobDetails from "./components/JobDetails.jsx";
import Jobs from "./routes/Jobs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Jobs /> },
      { path: "/bookmarks", element: <Bookmarks /> },
      { path: "/job/:id", element: <JobDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={JobsClone}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
