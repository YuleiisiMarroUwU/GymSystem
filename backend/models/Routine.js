import mongoose from "mongoose";

const routineSchema = new mongoose.Schema({
  userId: String,
  name: String,
  exercises: [
    {
      name: String,
      sets: Number,
      reps: Number
    }
  ]
});

export default mongoose.model("Routine", routineSchema);
