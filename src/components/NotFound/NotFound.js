import React from "react";
import { Link } from "react-router-dom";
import img from "../../Media/404page.JPG";
const NotFound = () => {
  return (
    <div>
      <img height="250px" src={img} alt="" />
      <h2>Page Not Found!!!</h2>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
