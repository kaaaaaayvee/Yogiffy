import React from "react";
import "../css/index.css"; //import your CSS file
import { NavLink } from "react-router-dom";

const EnrollNowComponent = () => {
  return (
    <div className="center-align">
      <h1>Welcome to Our Course!</h1>
      <img src="https://via.placeholder.com/500x200" alt="Sample image" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel augue
        nec urna placerat malesuada. Sed at venenatis nibh, a ullamcorper nulla.
        Nam et arcu semper, sollicitudin justo vel, volutpat felis. In eu justo
        et sapien tincidunt semper. Morbi vel nunc eros. Nulla facilisi.
      </p>
      <NavLink to={`/contact`}>
        <button className="primary-button">Enroll Now</button>
      </NavLink>
    </div>
  );
};

export default EnrollNowComponent;
