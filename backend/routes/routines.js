import express from "express";
import jwt from "jsonwebtoken";
import Routine from "../models/Routine.js";

const router = express.Router();

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).json({ error: "No token" });
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
}

router.post("/", verifyToken, async (req, res) => {
  const { name, exercises } = req.body;
  const routine = new Routine({ userId: req.userId, name, exercises });
  await routine.save();
  res.json({ message: "Routine saved" });
});

router.get("/", verifyToken, async (req, res) => {
  const routines = await Routine.find({ userId: req.userId });
  res.json(routines);
});

export default router;

import axios from "axios";

const getExercises = async () => {
  const res = await axios.get("https://wger.de/api/v2/exercise/?language=2");
  console.log(res.data.results);
};
