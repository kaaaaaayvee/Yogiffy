import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./services/modal";

const YogaAsanas = () => {
  const [completedAsanas, setCompletedAsanas] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [modalMessage, setModalMessage] = useState(null);

  const [asanas, setAsanas] = useState([]);
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  useEffect(() => {
    async function fetchYogaPrograms() {
      const response = await fetch(
        "http://localhost:9000/api/yoga-challenge-details?id=" + id
      ); // replace with your actual API endpoint
      const data = await response.json();
      setAsanas(data.exercises);
    }
    fetchYogaPrograms();
  }, []);

  const calculateProgressPercentage = () =>
    Math.round((completedAsanas.length / asanas.length) * 100);

  const getProgressMessage = () => {
    const progressPercentage = calculateProgressPercentage();
    if (progressPercentage < 50) {
      return "Poor Performance. Could do better.";
    } else if (progressPercentage < 80) {
      return "Good Job. Things are turning out to be great.";
    } else if (progressPercentage < 100) {
      return "Excellent!! You have came a long way.";
    } else {
      return `<div>Superb!!! You are challenging your limits.</div>`;
    }
  };

  const buttonContainerStyle = {
    marginTop: "24px",
    textAlign: "center",
  };
  const toggleAsanaCompletion = (index) => {
    if (completedAsanas.includes(index)) {
      setCompletedAsanas(completedAsanas.filter((i) => i !== index));
    } else {
      setCompletedAsanas([...completedAsanas, index]);
    }
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "32px",
  };

  const asanaStyle = {
    display: "flex",
    marginBottom: "24px",
    alignItems: "center",
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "8px",
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
    marginRight: "16px",
    borderRadius: "4px",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const progressContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  };

  const progressBarStyle = {
    width: "100%",
    height: "24px",
    backgroundColor: "#f3f3f3",
    borderRadius: "4px",
  };

  const progressStyle = {
    height: "100%",
    width: `${(completedAsanas.length / asanas.length) * 100}%`,
    backgroundColor: "#4CAF50",
    borderRadius: "inherit",
  };
  const handleMarkComplete = () => {
    const percentage = (completedAsanas.length / asanas.length) * 100;
    let message = "";
    if (percentage >= 0 && percentage <= 50) {
      message = "Poor Performance. Could do better.";
    } else if (percentage > 50 && percentage <= 80) {
      message = "Good Job. Things are turning out to be great";
    } else if (percentage > 80 && percentage < 100) {
      message = "Excellent!! You have come a long way.";
    } else if (percentage === 100) {
      message = `Superb!!! You are challenging your limits`;
    }
    setShowDialog(true);
    setModalMessage(message); // Set the message in the state
  };
  return (
    <div style={containerStyle}>
      <h1>Yoga Asanas</h1>
      {asanas.map((asana, index) => (
        <div key={index} style={asanaStyle}>
          <NavLink
            to={{
              pathname: "/aasandetails",
              search: "?id=" + asana.id,
            }}
          >
             {/* <img src={asana.img} alt="Sample image" /> */}
            <img src={asana.img} alt={asana.name} style={imgStyle} />
            <div>
              <h3>{asana.name}</h3>
              <p>{asana.description}</p>
            </div>
          </NavLink>
          <button
            style={buttonStyle}
            onClick={() => toggleAsanaCompletion(index)}
          >
            {completedAsanas.includes(index) ? "Mark Undone" : "Mark Done"}
          </button>
        </div>
      ))}
      <div style={progressContainerStyle}>
        <strong>Progress:</strong>
        <div style={progressBarStyle}>
          <div style={progressStyle}></div>
        </div>
      </div>

      <button onClick={handleMarkComplete} style={buttonStyle}>
        Mark Complete Challenge
      </button>
      <Modal
        showModal={showDialog}
        handleClose={() => setShowDialog(false)}
        style={{ textAlign: "center" }}
      >
        <div
          style={{
            float: "left",
            clear: "both",
            alignItems: "center",
            width: "100%",
            textAlign: "center",
            margin: "50px",
          }}
        >
          {modalMessage}
        </div>
        <div
          style={{
            float: "right",
            clear: "both",
            width: "100%",
            margin: "50px",
            textAlign: "center",
          }}
        >
          <button onClick={() => setShowDialog(false)}>Close</button>
        </div>
      </Modal>
      {/* {showDialog && (
        <div className="overlay">
          <div className="dialog">
            <h2>Congratulations!</h2>
            <p>
              You have completed {completedAsanas.length} out of {asanas.length}{" "}
              asanas.
            </p>
            <button onClick={() => setShowDialog(false)}>Close</button>
          </div>
        </div>
      )} */}
      {/* <div style={buttonContainerStyle}>
        
        <button style={buttonStyle} onClick={() => {}}>
          Mark Complete Challenge
        </button>
        <p>{getProgressMessage()}</p>
      </div> */}
    </div>
  );
};

export default YogaAsanas;
