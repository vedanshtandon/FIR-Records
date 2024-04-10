import React, { useState } from "react";
import "./option.css";
import { Link } from "react-router-dom";
const Option = () => {
  return (
    <div className="Option">
      <Link to="/" className="opt__form">
        FIR Form
      </Link>
      <Link to="/Data" className="opt__data">
        FIR Records
      </Link>
    </div>
  );
};

export default Option;
