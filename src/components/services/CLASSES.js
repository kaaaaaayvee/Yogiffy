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
  const [yogaClasses, setYogaClasses] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("beginner");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://yogiffy.onrender.com/api/yoga-classes"
        ); // replace with your actual API endpoint
        const data = await response.json();
        console.error("Data_is****", data.toString());
        console.error("Data_is****", data);
        setYogaClasses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const selectedLevelClasses =
    yogaClasses.length > 0 ? yogaClasses[0][selectedLevel] : [];

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
        {selectedLevelClasses.map((yogaClass) => (
          <NavLink
            to={{
              pathname: "/classDetails",
              search: "?id=" + yogaClass._id + "&level=" + selectedLevel,
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
