import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div>
        <Link to="/Pinterest">
          <img src="Inspiration.png" className="p-2" />
        </Link>
        <Link to="/Pinterest">
          <img
            src="Banner-2.jpg"
            className="p-2"
          />
        </Link>
      </div>
    </>
  );
}

export default Banner;
