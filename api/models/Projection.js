import mongoose from "mongoose";

const schemaProjection = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
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
  },
  deleted: { 
    type: Boolean, 
    default: false 
  }
})

export default mongoose.model('Projection', schemaProjection);