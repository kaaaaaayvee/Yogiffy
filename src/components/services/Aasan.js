import React, { useState, useEffect } from "react";
import AasanCard from "./AasanCard";

// import { YogaProgram } from "../../data/yogaprograms";

const Aasan = () => {
  const [yogaAasan, setYogaAsan] = useState([]);

  useEffect(() => {
    async function fetchYogaAasan() {
      const response = await fetch(
        "https://yogiffy.onrender.com/api/yoga-asanas"
      ); // replace with your actual API endpoint
      const data = await response.json();
      setYogaAsan(data);
    }
    fetchYogaAasan();
  }, []);
  let programs = yogaAasan.map((program) => {
    return (
      <AasanCard
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

export default Aasan;
