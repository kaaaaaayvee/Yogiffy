import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// App components
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import NotFound from "./NotFound";
import Services from "./Services";
import Program from "./services/PROGRAM";
import YogaClass from "./services/CLASSES";
import Details from "./programs/index";
import ContactForm from "./Contact";
import EnrollNowComponent from "./Enroll";
import Aasan from "./services/Aasan";
import AasanDetails from "./AasanDetails";
import ExerciseList from "./Exercise";
import Challenge from "./services/Challenge";
import ChallengeDetails from "./ChallengeDetails";
import ClassAsans from "./services/ClassAsans";

const App = () => (
  <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About title="About" />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/details/index" element={<Details />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/enroll" element={<EnrollNowComponent />} />
      <Route path="aasandetails" element={<AasanDetails />} />
      <Route path="challengedetails" element={<ChallengeDetails />} />
      <Route path="exercise" element={<ExerciseList />} />
      <Route path="classDetails" element={<ClassAsans />} />

      <Route path="/services" element={<Services />}>
        <Route path="programs" element={<Program />} />
        <Route path="aasan" element={<Aasan />} />
        <Route path="classes" element={<YogaClass />} />
        <Route path="challenges" element={<Challenge />} />

        {/* pay attention  to <Outlet /> in courses.js; it tells where nested routes shouold be put */}
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="details" element={<Details />} />
      <Route path="details/challenge" element={<Details />} />
    </Routes>
  </div>
);

export default App;
