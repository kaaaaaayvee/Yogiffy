import React from "react";

const Modal = ({ showModal, handleClose, children }) => {
  if (!showModal) {
    return null;
  }

  const modalStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contentStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "24px",
    width: "60%",
    maxWidth: "800px",
  };

  return (
    <div style={modalStyle} onClick={handleClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
