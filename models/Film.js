import mongoose from "mongoose";
const { Schema } = mongoose;

const filmSchema = new Schema({
  name: { type: String, required: true },
  director: { type: String, required: true },
  producer: { type: String, required: true },
  releaseDate: { type: Date },
  rated: Number,
  genre: { type: Schema.Types.ObjectId, ref: "Genre" },
});

const genreSchema = new Schema({
  action: String,
  comedy: String,
  drama: String,
  horror: String,
  romance: String,
  thriller: String,
  western: String,
});

export default Film = mongoose.model("Film", filmSchema);
export const Genre = mongoose.model("Genre", genreSchema);
