import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Replace with your desired endpoint
      const endpoint = "https://yogiffy.onrender.com/api/contact-us";
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Form submitted successfully!");
          setFormData({ name: "", email: "", message: "", phone: "" });
        } else {
          alert("Error submitting form");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error submitting form");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = { name: "", email: "", message: "", phone: "" };

    if (!formData.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
      isValid = false;
    }

    if (!formData.phone) {
      errors.phone = "phone is required";
      isValid = false;
    }

    if (!formData.message) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    margin: "0 auto",
    backgroundColor: "#f8f8f8",
    padding: "20px",
    borderRadius: "10px",
  };

  const inputStyle = {
    marginBottom: "16px",
    padding: "8px",
    width: "100%",
    border: "none",
    borderBottom: "1px solid #ccc",
    backgroundColor: "#fff",
    borderRadius: "3px",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginBottom: "8px",
  };

  const submitButtonStyle = {
    padding: "8px 16px",
    backgroundColor: "#008CBA",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  };

  // const formStyle = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // };

  // const inputStyle = {
  //   marginBottom: "16px",
  //   padding: "8px",
  //   width: "100%",
  // };

  // const errorStyle = {
  //   color: "red",
  //   fontSize: "12px",
  //   marginBottom: "8px",
  // };

  // const submitButtonStyle = {
  //   padding: "8px 16px",
  // };

  return (
    <div className="main-content courses">
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        {formErrors.name && <div style={errorStyle}>{formErrors.name}</div>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        {formErrors.email && <div style={errorStyle}>{formErrors.email}</div>}
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />
        {formErrors.phone && <div style={errorStyle}>{formErrors.phone}</div>}

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          style={inputStyle}
        />
        {formErrors.message && (
          <div style={errorStyle}>{formErrors.message}</div>
        )}

        <button type="submit" style={submitButtonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
