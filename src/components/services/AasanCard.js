import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AasanCard(props) {
  const navigate = useNavigate();
  // navigate("/other-page", { state: { id: 7, color: "green" } });
  return (
    <li className="course media group" textAlign="center">
      <div style={{ clear: "both", float: "none", textAlign: "center" }}>
        <img src={props.img} alt="course" width="100%" height="100%" textAlign="center" />
      </div>
      <div style={{ clear: "both" }}>
        <NavLink
          to={{
            pathname: "/aasandetails",
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

export default AasanCard;
