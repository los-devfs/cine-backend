import mongoose from "mongoose";

const ModelGenre = new mongoose.Schema({
  name: {
    type: String,
    /* enum: [
      "action",
      "comedy",
      "drama",
      "horror",
      "romance",
      "thriller",
      "western",
    ], */
    default: "action",
  },
  deleted: { 
    type: Boolean, 
    default: false 
  }
});

export default mongoose.model("Genre", ModelGenre);
