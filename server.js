const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const uri = process.env.MONGODB_URI;
// connect to your MongoDB Atlas cluster
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// create an Express app
const app = express();
app.use(express.json());
app.use(cors());
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: true }));
// Add the CORS middleware
app.use(
  cors({
    origin: "https://yogiffy.onrender.com", // Replace with your React app's origin
  })
);

// allow CORS for all routes
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

// Define a schema for the contact form data
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema);
// define a schema for your yoga programs
const challengesSchema = new mongoose.Schema({
  title: String,
  image: String,
  level: String,
  id: String,
  description: String,
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

// PROGRAM SCHEMA
const programSchema = new mongoose.Schema({
  title: String,
  description: String,
  img: String,
  id: String,
});
// AASAN SCHEMA
const asanaSchema = new mongoose.Schema({
  title: String,
  description: String,
  img: String,
  id: String,
  steps: String,
  benefits: String,
  contraindications: String,
  level: String,
  assocChallenge: String,
  registeredClass: String,
});
// Class SCHEMA
// Classes Schema

const exerciseSchema = new mongoose.Schema({
  title: String,
  description: String,
  img: String,
  id: String,
  steps: String,
  benefits: String,
  contraindications: String,
  level: String,
  assocChallenge: String,
  registeredClass: String,
});

const classSchema = new mongoose.Schema({
  title: String,
  img: String,
  level: String,
  id: String,
  description: String,
  exercises: [exerciseSchema],
});

const yogaClassSchema = new mongoose.Schema({
  beginner: [classSchema],
  intermediate: [classSchema],
  expert: [classSchema],
});

// create a model for your yoga programs based on the schema
const YogaChallenges = mongoose.model("challenges", challengesSchema);
const YogaProgram = mongoose.model("programs", programSchema);
const YogaAasan = mongoose.model("asanas", asanaSchema);
const YogaClasses = mongoose.model("classes", yogaClassSchema);

// define a route to fetch all yoga programs
app.get("/api/yoga-programs", async (req, res) => {
  const yogaPrograms = await YogaProgram.find();
  res.json(yogaPrograms);
});

app.get("/api/yoga-program-details", async (req, res) => {
  const yogaPrograms = await YogaProgram.findById(req.query.id);
  res.json(yogaPrograms);
});

app.get("/api/yoga-classes", async (req, res) => {
  try {
    const yogaClasses = await YogaClasses.find();
    // console.log("togachallednes", yogaClasses);
    res.json(yogaClasses);
  } catch (error) {
    console.error("Error fetching yoga classes:", error);
    res.status(500).json({ error: "Error fetching yoga classes" });
  }
});
// define a route to fetch a class with a particular id

app.get("/api/yoga-class-details", async (req, res) => {
  const { _id, level } = req.query;

  try {
    const yogaClass = await YogaClasses.findOne({
      [level]: { $elemMatch: { _id: mongoose.Types.ObjectId(_id) } },
    });
    if (!yogaClass) {
      res.status(404).json({ message: "Class not found" });
      return;
    }

    const selectedClass = yogaClass[level].find(
      (cls) => cls._id.toString() === _id
    );
    if (!selectedClass) {
      res.status(404).json({ message: "Class not found" });
    } else {
      res.json(selectedClass.exercises);
    }
  } catch (error) {
    console.error("Error fetching class data:", error);
    res.status(500).json({ message: "Error fetching class data" });
  }
});

// define a route to fetch all yoga Challenges
app.get("/api/yoga-challenges", async (req, res) => {
  const yogaChallenges = await YogaChallenges.find();
  res.json(yogaChallenges);
});

// define a route to fetch all yoga assans
app.get("/api/yoga-asanas", async (req, res) => {
  const yogaPrograms = await YogaAasan.find();
  res.json(yogaPrograms);
});
app.get("/api/yoga-asanas-details", async (req, res) => {
  const yogaPrograms = await YogaAasan.findById(req.query.id);
  res.json(yogaPrograms);
});

app.get("/api/yoga-challenge-details", async (req, res) => {
  const yogaPrograms = await YogaChallenges.findById(req.query.id);
  res.json(yogaPrograms);
});

app.post("/api/contact-us", async (req, res) => {
  try {
    // code to save form data to MongoDB
    console.log("#@@@@@", req.body);
    const contactData = req.body;
    console.log("$$$$$$$$$", contactData);
    const newContact = new Contact(contactData);

    newContact
      .save()
      .then(() =>
        res.status(201).json({ message: "Form submitted successfully!" })
      )
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (error) {
    console.error(error);
  }
});

// start the server
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
