import React from "react";
import { useSelector } from "react-redux";

const ErrorMessage = () => {
  const errorMessage = useSelector((store) => store.fetching);
  return <h3>{errorMessage.errorMessage}</h3>;
};

export default ErrorMessage;
