import mongoose from "mongoose";

const ModelGenre = new mongoose.Schema({
  action: String,
  comedy: String,
  drama: String,
  horror: String,
  romance: String,
  thriller: String,
  western: String,
});

export default mongoose.model("Genre", ModelGenre);