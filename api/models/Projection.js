import mongoose from "mongoose";

const schemaProjection = new mongoose.Schema({
  room: {
    type: Number,
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  },
  mainLanguage: {
    type: String,
    required: true,
  },
  subtitled: Boolean,
  subtitlingLanguage: String,
  price: {
    type: Number,
    required: true,
  }
})

export default mongoose.model('Projection', schemaProjection);