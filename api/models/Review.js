import mongoose from "mongoose";

const schema = new mongoose.Schema({
  review: {
    type: {
      title: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  idMovie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
});

export default mongoose.model("Review", schema);
