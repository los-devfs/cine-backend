import mongoose from "mongoose";

const ModelGenre = new mongoose.Schema({
  genre: {
    type: String,
    enum: [
      "action",
      "comedy",
      "drama",
      "horror",
      "romance",
      "thriller",
      "western",
    ],
    default: "action",
  },
});

export default mongoose.model("Genre", ModelGenre);
