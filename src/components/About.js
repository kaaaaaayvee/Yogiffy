import React from "react";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f0f0f0",
  padding: "2rem",
};

const titleStyle = {
  color: "#444",
  fontSize: "2.5rem",
  marginBottom: "1rem",
};

const subTitleStyle = {
  color: "#555",
  fontSize: "1.8rem",
  marginTop: "1.5rem",
  marginBottom: "1rem",
};

const paragraphStyle = {
  color: "#666",
  fontSize: "1.2rem",
  lineHeight: "1.6",
  marginBottom: "1rem",
  maxWidth: "800px",
  textAlign: "justify",
};
const listItemStyle = {
  color: "#666",
  fontSize: "1.2rem",
  lineHeight: "1.6",
  marginBottom: "0.5rem",
  listStyleType: "none",
  position: "relative",
  paddingLeft: "1.5rem",
};

const listStyle = {
  color: "#666",
  fontSize: "1.2rem",
  lineHeight: "1.6",
  paddingLeft: "1.2rem",
  marginBottom: "1rem",
  maxWidth: "800px",
};

const imageStyle = {
  width: "50%",
  height:'auto',

  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "2rem",
};
const listBulletStyle = {
  content: '""',
  position: "absolute",
  left: 0,
  top: "0.5rem",
  width: "0.5rem",
  height: "0.5rem",
  borderRadius: "50%",
  backgroundColor: "#555",
};

const ListBullet = () => <span style={listBulletStyle}></span>;

const About = () => (
  <div className="about-us-container" style={containerStyle}  >
    <img src="46.jpg" alt="Yoga Studio" style={imageStyle} />
    <h1 style={titleStyle}>About Us</h1>
    <p style={paragraphStyle}>
      Welcome to <strong>Yogify Yourself</strong>, your one-stop destination for
      holistic wellbeing and personal transformation! We are proud to provide a
      wide range of yoga services designed to meet the diverse needs of our
      ever-growing community. Our mission is to empower individuals to lead
      healthier, happier, and more balanced lives by incorporating the ancient
      wisdom of yoga into their modern lifestyles.
    </p>

    <h2 style={subTitleStyle}>Our Services:</h2>
    <h3 style={subTitleStyle}>1. Yoga Classes:</h3>
    <p style={paragraphStyle}>
      We offer a variety of yoga classes suitable for all ages, levels of
      fitness, and experience. Our classes range from short 2-minute sessions to
      immersive 90-minute experiences, ensuring that you can always find a class
      that fits your schedule and needs. Whether you are new to yoga or an
      experienced practitioner, our diverse selection of classes will help you
      deepen your practice and enhance your overall wellbeing.
    </p>

    <h3 style={subTitleStyle}>2. Yoga Programs:</h3>
    <p style={paragraphStyle}>
      Yogify Yourself provides a range of specialized yoga programs tailored to
      address specific goals and requirements. Whether you are looking to
      improve your physical strength, increase flexibility, reduce stress, or
      embark on a spiritual journey, our carefully designed programs will
      support you every step of the way. Enroll in one of our programs today and
      experience the transformative power of yoga under the guidance of our
      skilled instructors.
    </p>

    <h3 style={subTitleStyle}>3. Yoga Challenges:</h3>
    <p style={paragraphStyle}>
      We believe that challenges are an essential part of personal growth and
      development. At Yogify Yourself, we offer a variety of yoga challenges
      designed for different levels of expertise, from beginners to advanced
      practitioners. Our challenges are designed to push your boundaries, deepen
      your practice, and help you achieve your personal goals
    </p>

    <h2 style={{ fontSize: "2rem", marginBottom: "1rem" ,marginTop:'2rem'}}>
      Why Choose Yogify Yourself?
    </h2>
    <ul>
      <li style={listItemStyle}>
        <ListBullet />
        Experienced and certified yoga instructors
      </li>
      <li style={listItemStyle}>
        <ListBullet />A wide range of classes, programs, and challenges tailored
        to your needs
      </li>
      <li style={listItemStyle}>
        <ListBullet />A welcoming and supportive community of like-minded
        individuals
      </li>
      <li style={listItemStyle}>
        <ListBullet />A serene and
      </li>
    </ul>
  </div>
);

export default About;
