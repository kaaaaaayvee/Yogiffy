import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Service(props) {
  const navigate = useNavigate();
  // navigate("/other-page", { state: { id: 7, color: "green" } });
  return (
    <li className="course media group" style={{ textAlign: "center" }}>
      <div style={{ clear: "both", float: "none" ,textAlign:"center"}}>
        <img src={props.img} alt="course" width="80%"  textAlign="center"/>
      </div>
      <div style={{ clear: "both" }}>
        {/* <img className="course-img" src={props.img} alt="course" /> */}
        <NavLink
          to={{
            pathname: "/details/index",
            search: "?id=" + props._id,
            aboutProps: {
              title: props.title,
            },
          }}
        >
          <div>
            <h3>{props.title}</h3>
            <p>{props.desc.substring(0, 100)}...</p>
          </div>
        </NavLink>
      </div>
    </li>
  );
}

export default Service;
