import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Details(props) {
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");

  const [yogaPoseDetail, setYogaPoseDetail] = useState([]);
  useEffect(() => {
    async function fetchYogaChallenges() {
      const response = await fetch(
        "http://localhost:9000/api/yoga-program-details?id=" + id
      ); // replace with your actual API endpoint
      const data = await response.json();
      setYogaPoseDetail(data);
    }
    fetchYogaChallenges();
  }, []);
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: "24px",
  };

  const imageContainerStyle = {
    flex: "auto 0 0",
    marginRight: "16px",
  };

  const imageStyle = {
    height: "300px",
    float: "right",
  };

  const textContainerStyle = {
    flex: "1 1 auto",
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img style={imageStyle} src={yogaPoseDetail.img} alt="Image" />
      </div>
      <div style={textContainerStyle}>
        <p>{yogaPoseDetail.description}
        
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
          ultrices arcu. Phasellus nec sapien nec diam sollicitudin rutrum.
          Maecenas ultrices elementum dui in molestie. Sed tincidunt euismod est
          vel fringilla. Nulla et ullamcorper magna, a maximus quam. Fusce
          blandit malesuada ex, eu pretium eros volutpat a. Sed rhoncus, sem in
          feugiat auctor, massa purus malesuada turpis, ut interdum sapien lorem
          eu risus. Donec a vestibulum magna. Nulla ut euismod magna. Donec
          posuere, tellus non fermentum sollicitudin, tellus ex finibus est, in
          suscipit tellus nisi sed sapien.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
          ultrices arcu. Phasellus nec sapien nec diam sollicitudin rutrum.
          Maecenas ultrices elementum dui in molestie. Sed tincidunt euismod est
          vel fringilla. Nulla et ullamcorper magna, a maximus quam. Fusce
          blandit malesuada ex, eu pretium eros volutpat a. Sed rhoncus, sem in
          feugiat auctor, massa purus malesuada turpis, ut interdum sapien lorem
          eu risus. Donec a vestibulum magna. Nulla ut euismod magna. Donec
          posuere, tellus non fermentum sollicitudin, tellus ex finibus est, in
          suscipit tellus nisi sed sapien.
        </p>
      </div>
    </div>
  );
}

export default Details;
