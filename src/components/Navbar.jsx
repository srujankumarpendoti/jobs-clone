import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-bottom nav-container">
      <Link
        className="navbar-brand nav-items  bg-success bg-gradient text-light"
        to="/"
      >
        Jobs
      </Link>
      <Link
        className="navbar-brand nav-items  bg-info bg-gradient text-light"
        to="/bookmarks"
      >
        Bookmarks
      </Link>
    </nav>
  );
};

export default Navbar;
