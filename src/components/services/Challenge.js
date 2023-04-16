import React, { useState, useEffect } from "react";
import ChallengeCard from "./ChallengeCard";

const Challenge = () => {
  const [yogaChallenges, setYogaChallenge] = useState([]);

  useEffect(() => {
    async function fetchYogaChallenges() {
      const response = await fetch(
        "https://yogiffy.onrender.com/api/yoga-challenges"
      ); // replace with your actual API endpoint
      const data = await response.json();
      setYogaChallenge(data);
    }
    fetchYogaChallenges();
  }, []);

  const programs = yogaChallenges.map((challenge) => {
    return (
      <ChallengeCard
        title={challenge.title}
        description={challenge.description}
        img={challenge.img}
        key={challenge.id}
        id={challenge._id}
      />
    );
  });

  return (
    <div>
      <ul>{programs}</ul>
    </div>
  );
};

export default Challenge;
