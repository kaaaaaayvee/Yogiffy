const mongoose = require("mongoose");

// define Schema Class
// Challenges Schema
const challengesSchema = new mongoose.Schema({
  title: String,
  description: String,
  img_src: String,
  id: String,
  exercises: [
    {
      title: String,
      description: String,
      img_src: String,
      id: String,
      steps: String,
      benefits: String,
      contraindications: String,
      level: String,
      assocChallenge: String,
      registeredClass: String,
    },
  ],
});


//const Book = mongoose.model("Book", todoSchema);
const Challenges = mongoose.model("challenges", challengesSchema);

module.exports = Challenges;



