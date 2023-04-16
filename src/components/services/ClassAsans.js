import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ExerciseList = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const level = queryParameters.get("level");
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/yoga-class-details?_id=${id}&level=${level}`); // replace with your actual API endpoint
        // const response = await fetch("http://localhost:9000/api/yoga-class-details?_id="+id); // replace with your actual API endpoint
        const data = await response.json();
        console.error("Data_is****", data);
        setExercises(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const listStyles = {
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#F5F5F5",
    margin:"15px"
  };

  const itemStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px",
  };

  const nameStyles = {
    fontWeight: "bold",
    fontSize: "18px",
  };

  const durationStyles = {
    fontSize: "16px",
  };

  return (
    <div style={listStyles}>
      <h2 style={{ marginBottom: "10px" }}>Exercise List</h2>
      <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
        {exercises.map((exercise) => (
          <li key={exercise.id} style={itemStyles}>
            <div style={{ flex: "1" }}>
              <span style={nameStyles}>{exercise.title}</span>
              <br />
              <span style={durationStyles}>Duration: {exercise.steps}</span>
            </div>
          </li>
        ))}
      </ul>
      <NavLink
        to={{
          pathname: "/contact",
          search: "?id=" + id,
        }}
      >
        {" "}
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Enroll
        </button>
      </NavLink>
    </div>
  );
};

export default ExerciseList;
