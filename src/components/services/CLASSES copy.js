import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const YogaClass = () => {
  // const yogaClasses = {
  //   beginner: [
  //     { title: "2 Minute Beginner Yoga Class", duration: "2 min", id: 123 },
  //     { title: "5 Minute Beginner Yoga Class", duration: "5 min", id: 123 },
  //     { title: "15 Minute Beginner Yoga Class", duration: "15 min", id: 123 },
  //     { title: "90 Minute Beginner Yoga Class", duration: "90 min", id: 123 },
  //   ],
  //   intermediate: [
  //     { title: "2 Minute Intermediate Yoga Class", duration: "2 min", id: 123 },
  //     { title: "5 Minute Intermediate Yoga Class", duration: "5 min", id: 123 },
  //     {
  //       title: "15 Minute Intermediate Yoga Class",
  //       duration: "15 min",
  //       id: 123,
  //     },
  //     {
  //       title: "90 Minute Intermediate Yoga Class",
  //       duration: "90 min",
  //       id: 123,
  //     },
  //   ],
  //   expert: [
  //     { title: "2 Minute Expert Yoga Class", duration: "2 min", id: 123 },
  //     { title: "5 Minute Expert Yoga Class", duration: "5 min", id: 123 },
  //     { title: "15 Minute Expert Yoga Class", duration: "15 min", id: 123 },
  //     { title: "90 Minute Expert Yoga Class", duration: "90 min", id: 123 },
  //   ],
  // };
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const [yogaClasses, setYogaClasses] = useState({
    beginner: [],
    intermediate: [],
    expert: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/api/yoga-classes");
        const data = await response.json();
        setYogaClasses(data);
      } catch (error) {
        console.error("Error fetching yoga classes:", error);
      }
    };

    fetchData();
  }, []);
  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>Select your preferred yoga class level:</h2>
      <div>
        <input
          type="radio"
          id="beginner"
          name="level"
          value="beginner"
          checked={selectedLevel === "beginner"}
          onChange={handleLevelChange}
        />
        <label htmlFor="beginner">Beginner</label>
      </div>
      <div>
        <input
          type="radio"
          id="intermediate"
          name="level"
          value="intermediate"
          checked={selectedLevel === "intermediate"}
          onChange={handleLevelChange}
        />
        <label htmlFor="intermediate">Intermediate</label>
      </div>
      <div>
        <input
          type="radio"
          id="expert"
          name="level"
          value="expert"
          checked={selectedLevel === "expert"}
          onChange={handleLevelChange}
        />
        <label htmlFor="expert">Expert</label>
      </div>
      <br></br>
      <br></br>
      <h2>Available classes:</h2>
      <br></br>
      <br></br>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {yogaClasses[selectedLevel].map((yogaClass) => (
          <NavLink
            to={{
              pathname: "/classDetails",
              search: "?id=" + yogaClass.id,
              aboutProps: {
                level: yogaClass.id,
                className: yogaClass.title,
              },
            }}
            style={{
              textDecoration: "none",
              float: "left",
              clear: "both",
              width: "100%",
            }}
            key={yogaClass.id}
          >
            <li
              style={{
                backgroundColor: "#fff",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                padding: "10px",
                borderRadius: "5px",
                margin: "10px 0",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <strong>{yogaClass.title}</strong> ({yogaClass.duration})
              <img src="/1.jpg" width="100" style={{ marginLeft: "20px" }} />
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default YogaClass;
