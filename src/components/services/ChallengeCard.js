import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ChallengeCard(props) {
  const navigate = useNavigate();
  //navigate("/other-page", { state: { id: 7, color: "green" } });
  return (
    <li className="course media group">
      <div style={{ clear: "both" }}>
        <img src={props.img} alt="course" width="350" />
      </div>
      <div style={{ clear: "both" }}>
        <NavLink
          data={{
            title: props.title,
            description: props.description,
            img: props.img,
          }}
          to={{
            pathname: "/challengedetails",
            search: "?id=" + props.id,
            aboutProps: {
              title: props.title,
              description: props.description,
              img: props.img,
            },
          }}
        >
          <div>
            <h3>{props.title}</h3>
            <p style={{marginBottom:'50px'}}>{props.description.substring(0, 100)}...</p>
            {/* <p>{props.description}</p> */}
          </div>
        </NavLink>
      </div>
    </li>
  );
}

export default ChallengeCard;
