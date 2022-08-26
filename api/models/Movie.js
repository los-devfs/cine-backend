import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  producer: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  genre: {
    //TODO: ¿cómo ligar archivos?
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre',
    required: true,
  },
  cast: {
    type: Array,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
});

schema.index({title: 'text'});

export default mongoose.model("Movie", schema);