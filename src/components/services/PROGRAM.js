import React, { useState, useEffect } from "react";
import Service from "./Service";
// import { YogaProgram } from '../../data/yogaprograms';

const Program = () => {
  const [yogaPrograms, setYogaPrograms] = useState([]);

  useEffect(() => {
    async function fetchYogaChallenges() {
      console.log(process.env.API_BASE_URL);
      console.log("apiIRl", "${process.env.API_BASE_URL}/api/yoga-programs");
      const response = await fetch("https://yogiffy.onrender.com/api/yoga-programs"); // replace with your actual API endpoint
      const data = await response.json();
      console.error("Data_is****", data.toString());
      console.error("Data_is****", data);
      setYogaPrograms(data);
    }
    fetchYogaChallenges();
  }, []);

  const programs = yogaPrograms.map((program) => {
    return (
      <Service
        title={program.title}
        desc={program.description}
        img={program.img}
        key={program.id}
        id={program.id}
        _id={program._id}
      />
    );
  });
  return (
    <div>
      <ul>{programs}</ul>
    </div>
  );
};

export default Program;
