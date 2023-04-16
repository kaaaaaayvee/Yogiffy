import React, { useState, useEffect } from "react";
import "../css/index.css"; //import your CSS file
import { NavLink, useParams } from "react-router-dom";

const ChallengeDetails = (props) => {
  const [yogaChallenges, setYogaChallenges] = useState([]);
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  useEffect(() => {
    async function fetchYogaChallenges() {
      const response = await fetch(
        "http://localhost:9000/api/yoga-challenge-details?id=" + id
      ); // replace with your actual API endpoint
      const data = await response.json();
      setYogaChallenges(data);
    }
    fetchYogaChallenges();
  }, []);
  return (
    <div className="center-align">
      <h1>{yogaChallenges.title}</h1>
      <img src={yogaChallenges.img} alt="Sample image" height="600px"/>
      <p>{yogaChallenges.description}</p>
      <NavLink
        to={{
          pathname: "/exercise",
          search: "?id=" + yogaChallenges._id,
        }}
      >
        <button className="primary-button">Start Challenge</button>
      </NavLink>
    </div>
  );
};

export default ChallengeDetails;
