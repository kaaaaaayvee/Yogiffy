import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const YogaClass = (props) => (
  <li className="course media group">
    <img className="course-img" src={props.img} alt="course" />
    <NavLink
      to={{
        pathname: "/enroll",
        search: "?id=" + props.id,
        aboutProps: {
          title: props.title,
        },
      }}
    >
      <div>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </NavLink>
  </li>
);

export default YogaClass;
