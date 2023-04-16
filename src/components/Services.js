import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Services = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Services</h2>
    </div>
    {/* <ul className="course-nav">
      <li>
        <NavLink to="programs">Programs</NavLink>
      </li>
      <li>
        <NavLink to="aasan">Aasan</NavLink>
      </li>
      <li>
        <NavLink to="classes">Classes</NavLink>
      </li>
      <li>
        <NavLink to="challenges">Challenges</NavLink>
      </li>
    </ul> */}
    <Outlet />
  </div>
);

export default Services;
